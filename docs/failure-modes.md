# Failure Modes

For `atlas-ops-rename-map`, I would look first for these mistakes:

- `dry-run spread` cases moving lanes without a matching threshold change.
- `operator cost` scoring higher after drag increases.
- Duplicate fixture ids hiding a stale golden row.
- README examples drifting away from the verifier.

The local checks are intentionally strict about these cases.
