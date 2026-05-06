# Atlas Ops Rename Map Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 186 | ship |
| stress | rename risk | 195 | ship |
| edge | operator cost | 235 | ship |
| recovery | idempotence | 255 | ship |
| stale | dry-run spread | 238 | ship |

Start with `recovery` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `baseline` becomes less cautious without a clear reason, I would inspect the drag input first.
