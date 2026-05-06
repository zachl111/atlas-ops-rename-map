# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 186, lane `ship`
- `stress`: `rename risk`, score 195, lane `ship`
- `edge`: `operator cost`, score 235, lane `ship`
- `recovery`: `idempotence`, score 255, lane `ship`
- `stale`: `dry-run spread`, score 238, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
