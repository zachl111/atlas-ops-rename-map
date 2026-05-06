# atlas-ops-rename-map

`atlas-ops-rename-map` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for rename scenarios with framed sample traffic, bounds and ordering tests, and fixture-scale datasets.

## Problem It Tries To Make Smaller

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Atlas Ops Rename Map Review Notes

For a quick review, compare `idempotence` with `dry-run spread` before reading the middle cases.

## Working Pieces

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/atlas-ops-rename-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `idempotence` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Design Notes

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The JavaScript implementation avoids hidden state so fixture changes are easy to reason about.

## Example Run

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The check exercises the source code and the review fixture. `recovery` is the high score at 255; `baseline` is the low score at 186.

## Known Limits

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
