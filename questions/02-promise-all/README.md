# Question 02, Promise.all Handling

## Prompt to candidate

This screen fetches users, permissions, and feature flags in parallel. One endpoint fails intermittently, and the whole screen collapses into an error state.

Task:

1. Identify why one failed request breaks all data rendering.
2. Update the async handling so partial data can render safely.
3. Keep type safety for fulfilled and rejected results.

## Timebox

- 15 to 20 minutes

## Starter code

See `starter/PromiseAllBug.ts`.

## Constraints

- Keep requests concurrent.
- Preserve readable error reporting.
- Avoid `any` in result handling.

## Acceptance criteria

- One failed endpoint does not block successful sections.
- Errors for failed sections are visible and identifiable.
- Stretch: per-section state is explicit, loading, success, or failed.
- Stretch: retry targets a failed section without resetting healthy ones.
