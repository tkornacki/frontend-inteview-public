# Question 01, Broken Hydration

## Prompt to candidate

This React component shows a user greeting and metadata. It will be rendered on the server with `renderToString` and hydrated on the client. As written, it produces different HTML on the server and the client, which causes hydration mismatch warnings and occasional flicker on load.

Task:

1. Identify what makes the component output non-deterministic across server and client renders.
2. Fix it so the first client render matches server output exactly.
3. Explain why your fix is correct.

Note: the local dev server is client-only, but the test suite uses `renderToString` to verify server-client consistency. Run `bun run test` to confirm your fix.

## Timebox

- 15 to 20 minutes

## Starter code

See `starter/HydrationBug.tsx`.

## Constraints

- Keep the component API the same.
- Do not remove displayed fields.
- Keep TypeScript types strict.

## Acceptance criteria

- Initial server and first client render are deterministic.
- Hydration warnings are resolved.
- Dynamic client only values still update after mount.

