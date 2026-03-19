import type { ReactElement } from "react";
import { useMemo } from "react";
import { HydrationBug } from "../../questions/01-broken-hydration/starter/HydrationBug";
import { CircuitBreakerBug } from "../../questions/03-circuit-breaker/starter/CircuitBreakerBug";
import { Nav } from "../components/Nav";
import { getQuestionFromSearch } from "../shared/question";
import { PromiseAllBugView } from "../views/PromiseAllBugView";

export function AppBug(): ReactElement {
  const question = useMemo(() => getQuestionFromSearch(window.location.search), []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: 16, maxWidth: 900 }}>
      <h1>Frontend Interview Pack</h1>
      <Nav />
      {question === "1" ? <HydrationBug userName="Candidate" /> : null}
      {question === "2" ? <PromiseAllBugView /> : null}
      {question === "3" ? <CircuitBreakerBug /> : null}
    </main>
  );
}
