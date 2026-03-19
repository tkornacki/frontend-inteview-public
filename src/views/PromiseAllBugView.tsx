import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { loadDashboardData } from "../../questions/02-promise-all/starter/PromiseAllBug";

type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

export function PromiseAllBugView(): ReactElement {
  const [state, setState] = useState<LoadState>({ status: "idle" });

  async function runLoad(): Promise<void> {
    setState({ status: "loading" });
    try {
      const result = await loadDashboardData();
      const summary = [
        `users=${result.users.length}`,
        `permissions=${result.permissions.length}`,
        `flags=${result.featureFlags.length}`,
      ].join(", ");
      setState({ status: "success", data: summary });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown load error";
      setState({ status: "error", message });
    }
  }

  useEffect(() => {
    void runLoad();
  }, []);

  return (
    <section>
      <h2>Promise.all Handling</h2>
      <p>This demo intentionally collapses to a single error state when one request fails.</p>
      <button onClick={() => void runLoad()} type="button">
        Retry load
      </button>
      <p>Status: {state.status}</p>
      {state.status === "success" ? <pre>{state.data}</pre> : null}
      {state.status === "error" ? <pre>{state.message}</pre> : null}
    </section>
  );
}
