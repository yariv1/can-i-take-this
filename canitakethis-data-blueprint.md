# canitakethis.co — Data Layer Blueprint (v1)

**The one principle everything else serves:**
Aggregate continuously in the background → serve instantly from a cache → fall back to a live fetch only for the long tail → and never serve an unverified guess for the categories where a wrong answer can hurt someone.

We don't invent data and we don't hand-type it. A machine fetches it from official sources, structures it, stamps it with where it came from and when it was checked, and caches it. The user gets an instant answer that we can always trace back to a source.

---

## 1. The four data domains

Splitting the data by how hard and how volatile it is keeps the work honest and lets us ship the easy, high-value parts first.

| Domain | Size | Volatility | How we get it | Ships |
|---|---|---|---|---|
| **Security rules** (liquids 100 ml, batteries, sharps, vapes) | Tiny, global | Very low | Write once from IATA / TSA / EU rules | Phase 1 |
| **Airline baggage & fares** | Finite (~150 airlines ≈ most trips) | Medium | Fetch + structure per-airline source; refresh on a schedule | Phase 1–2 |
| **Country import rules** (customs, food, plants, cash, tobacco, alcohol) | Per country × topic | Medium–high | Fetch + structure per official authority | Phase 2 |
| **High-stakes** (medicines into countries, live animals) | Per ingredient / species × country | Medium | Verified records only — never a live guess | Phase 3 |

---

## 2. The source map — "finding the best sources is the whole trick"

This is the small, curated core of the whole company. It is a registry that maps **each airline** and **each (country × topic)** to its authoritative source URL(s). It is tiny compared to the data it points at, and it is the one thing worth curating by hand.

Everything downstream — the fetch jobs, the structuring, the refresh — reads from this map.

```json
{
  "airlines": {
    "SQ": {
      "baggage": "https://www.singaporeair.com/en_UK/.../baggage/",
      "pets":    "https://www.singaporeair.com/en_UK/.../travelling-with-pets/"
    },
    "LY": {
      "baggage": "https://www.elal.com/en/.../baggage/",
      "pets":    "https://www.elal.com/en/.../pets/"
    }
  },
  "countries": {
    "JP": {
      "medicine": "https://www.mhlw.go.jp/english/",
      "food":     "https://www.maff.go.jp/aqs/english/",
      "animals":  "https://www.maff.go.jp/aqs/english/",
      "customs":  "https://www.customs.go.jp/english/"
    },
    "AU": {
      "food":     "https://www.agriculture.gov.au/biosecurity-trade/travelling/",
      "animals":  "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/",
      "customs":  "https://www.abf.gov.au/entering-and-leaving-australia/"
    }
  }
}
```

> Domains above are real official authorities; exact deep paths are placeholders to confirm during curation. The map is where a human's judgement lives — pick the *authoritative* page, not the first Google result.

---

## 3. Record schemas — the shape of every answer

Every record, in every domain, carries the same **trust envelope** (section 4). Below is the domain-specific shape.

### 3a. Security rule (global)
```json
{
  "id": "sec.liquids.carryon",
  "topic": "liquids",
  "applies_to": "carry_on",
  "verdict": "conditional",
  "rule": { "max_container_ml": 100 },
  "notes": "Each container 100 ml or less, in one clear resealable bag.",
  "source_name": "IATA / TSA / EU aviation security",
  "source_url": "https://www.iata.org/.../cabin-baggage/",
  "last_verified": "2026-01-15",
  "confidence": "verified"
}
```

### 3b. Airline record
```json
{
  "id": "airline.SQ",
  "iata": "SQ",
  "name": "Singapore Airlines",
  "site": "singaporeair.com",
  "per_passenger": true,
  "fares": [
    {
      "label": "Economy Standard",
      "cabin":   { "pieces": 1, "max_kg": 7,  "max_dim_cm": "115 total", "personal_item": true },
      "checked": { "pieces": 1, "max_kg": 30, "note": "route-dependent (weight vs piece concept)" }
    },
    {
      "label": "Business",
      "cabin":   { "pieces": 2, "max_kg": 7,  "personal_item": true },
      "checked": { "pieces": 2, "max_kg": 40 }
    }
  ],
  "source_name": "Singapore Airlines — Baggage",
  "source_url": "https://www.singaporeair.com/en_UK/.../baggage/",
  "last_verified": "2026-01-20",
  "confidence": "verified"
}
```

### 3c. Country item rule (topic-based)
```json
{
  "id": "country.AU.food.meat",
  "country": "AU",
  "topic": "food",
  "subtype": "meat",
  "verdict": "not_allowed",
  "tag": "Not permitted",
  "notes": "Meat products prohibited; declare all food (strict biosecurity).",
  "source_name": "Australia Dept. of Agriculture (biosecurity)",
  "source_url": "https://www.agriculture.gov.au/.../bringing-mailing-goods/",
  "last_verified": "2026-01-18",
  "confidence": "verified"
}
```

### 3d. Medicine — two tables that join on active ingredient
The critical rule we already designed into the UI: **key off the active ingredient, never the brand.**

```json
// Drug identity: brand -> ingredient (brands are not globally unique)
{ "id": "drug.sudafed", "brand": "Sudafed", "ingredient": "Pseudoephedrine",
  "source_name": "national drug formulary", "confidence": "verified" }

// Ingredient x country rule
{
  "id": "med.pseudoephedrine.JP",
  "ingredient": "Pseudoephedrine",
  "country": "JP",
  "verdict": "banned",
  "prescription": "does_not_change_verdict",
  "notes": "Prohibited on import, even with a prescription.",
  "source_name": "Japan MHLW",
  "source_url": "https://www.mhlw.go.jp/english/",
  "last_verified": "2026-01-10",
  "confidence": "verified"
}
```
`verdict` maps directly to the card ramp we built: `banned` → red, `permit` → amber (prescription + prior approval), `rx` → amber (prescription needed), `ok` → green (no prescription needed), `unknown` → blue (check the source).

### 3e. Animal rule
```json
{
  "id": "animal.catdog.JP",
  "country": "JP",
  "species": ["dog", "cat"],
  "verdict": "conditional_strict",
  "requirements": ["microchip", "rabies_vaccination", "blood_titre_test", "import_permit", "possible_quarantine"],
  "lead_time_days": 210,
  "source_name": "Japan Animal Quarantine Service (MAFF)",
  "source_url": "https://www.maff.go.jp/aqs/english/",
  "last_verified": "2026-01-12",
  "confidence": "verified"
}
```

---

## 4. The trust envelope → the card states we already built

Every record carries three fields that the front end already knows how to show:

```json
"source_url":    "...",          // the "Helpful sources" link
"last_verified": "2026-01-20",   // a date we can show on the card
"confidence":    "verified"      // drives which card state renders
```

| `confidence` | Card behaviour (already built) |
|---|---|
| `verified` | Clear verdict + source + "checked on `last_verified`" |
| `general` | "Generally X, but confirm" + source |
| `unverified` | Blue "Check the source" state — no confident yes/no, just the pointer |

This is why the front end didn't fight us: the cards were built to consume exactly this. Adding a "last verified" line and a confidence badge is a tiny change.

---

## 5. The pipeline

```
                 ┌─────────────────┐
   SOURCE MAP ──▶│  scheduled fetch │──▶ raw pages / PDFs
   (curated)     └─────────────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ AI structuring  │  extract into the schema above
                 └─────────────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │  validation     │  schema check, sanity checks, diff vs last version
                 └─────────────────┘
                          │
             high-stakes? ├─ yes ─▶ human review queue ─┐
                          │                              ▼
                          └─ no ──────────────▶  stamped record (source, date, confidence)
                                                          │
                                                          ▼
                                                   CACHE / DATABASE
                                                          │
                                                          ▼
                                                     API  ──▶  the cards
```

**Cache hit → instant answer.** That protects the "tap-tap-boom" promise.

**Cache miss (long tail)** → this is where *your live-fetch idea shines*: show the loader you described ("aggregating from Singapore Airlines…"), fetch the source live, structure it, mark it `unverified`, show it **with its source**, and queue it for review so next time it's cached and verified. Live fetch is the rare exception, not every tap.

**High-stakes categories** (medicines into countries, pets into strict countries) **never** serve an unverified live guess as a confident yes/no. They serve a verified record or the sourced "here's the official authority" pointer. This is the one hard line.

---

## 6. Refresh & change detection

| Domain | Refresh cadence |
|---|---|
| Security rules | Rarely (quarterly re-check) |
| Airline baggage/fares | Monthly, + on detected change |
| Country import rules | Monthly |
| Medicines / animals | On change + quarterly re-verify |

Each fetch hashes the source; if the content changed, re-structure and re-stamp `last_verified`. A record whose `last_verified` is too old gets automatically down-ranked to `general` confidence until re-checked.

---

## 7. Phased build

**Phase 1 — the plane-side wedge (fast, safe, winnable)**
- Schema + source map skeleton.
- Security-rules table (write once).
- Top ~20 airlines fully cached (baggage + fares).
- Cards show `last_verified` + confidence. This alone is a shippable product.

**Phase 2 — country import, top destinations**
- Customs / food / plants / cash / tobacco / alcohol for the top ~20 destinations.
- Confidence tiering live end-to-end (verified / general / unverified).
- Live-fetch fallback + loader UX for cache misses.

**Phase 3 — high-stakes, with a human in the loop**
- Medicines: brand→ingredient table + ingredient×country rules for the known-strict countries first (Japan, Singapore, UAE, Qatar…).
- Animals: cat/dog into the strict-quarantine countries.
- Review queue and the hard "no unverified guess" guardrail.

---

## 8. How it plugs into the front end we already have

The cards already render from `{ status, tags, lines, source, confidence }`. The data layer just fills those fields from real records instead of the illustrative tables. Concretely, the only new UI is:

- a small **"verified on `last_verified`"** line on the card,
- the **confidence badge** deciding verified / general / unverified styling,
- the **loader state** on the info card and the fare-class row for cache-miss live fetches.

Everything else — the two-mode split, the boarding-pass verdict, the medication ramp, the per-passenger bag card, the Helpful sources block — was already built to receive this data. That was the point of designing the experience first.
