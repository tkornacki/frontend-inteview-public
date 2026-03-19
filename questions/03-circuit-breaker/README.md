# Question 03, Circuit Breaker for Rapid Clicks

## Prompt to candidate

This table appends rows when a button is clicked. Under rapid clicking, the UI slows down and can get trapped in repeated renders.

Task:

1. Find the render feedback loop.
2. Stop the infinite or runaway re render behavior.
3. Add a circuit breaker to protect the UI from rapid repeated clicks.

## Timebox

- 20 to 25 minutes

## Starter code

- Medium and Hard: `starter/CircuitBreakerBug.tsx`
- Easy: `starter/CircuitBreakerBugEasy.tsx`, a simplified version with circuit breaker scaffolding removed so the candidate can focus on the render loop.

## Constraints

- Keep button semantics and table output.
- Do not remove row appending capability.
- Circuit breaker should recover after cooldown or reset.

## Acceptance criteria

- Rapid clicks do not lock the UI.
- Row appends still function during normal pace clicks.
- Circuit breaker state is visible to user.
- Render count stays bounded during click bursts.

