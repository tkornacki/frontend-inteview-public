# Frontend Interview Pack

Welcome to the RapidSOS frontend interview. This repository contains three practical debugging and resilience exercises built with React, TypeScript, and Bun.

## Questions

- `questions/01-broken-hydration/` - React hydration mismatch debugging
- `questions/02-promise-all/` - Promise.all error handling
- `questions/03-circuit-breaker/` - Circuit breaker for rapid user input

Each question folder has a `README.md` with the full prompt and a `starter/` directory with the code you will work on.

## Setup

```bash
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) and use the nav links to switch between questions.

## Available scripts

- `bun run dev` starts the app showing the starter code you will work on.
- `bun run test` runs the test suite.
- `bun run test:watch` runs tests in watch mode.
- `bun run typecheck` runs `tsc --noEmit` to verify TypeScript compiles without errors.
- `bun run build` produces a production build.

## What to expect

Your interviewer will walk you through one or more questions during the session. For each question:

1. Read the README in the question folder.
2. Open the starter file and identify the bug or missing behavior.
3. Fix it and explain your reasoning.
4. Run `bun run test` to verify your solution.

Good luck!
