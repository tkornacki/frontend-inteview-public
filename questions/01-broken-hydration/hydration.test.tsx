/**
 * Question 01, Broken Hydration
 *
 * The starter component renders non-deterministic values during render, so server
 * HTML and the first client render can diverge. Use these tests while you work:
 *   - The starter block proves the bug exists.
 *   - After you fix starter/HydrationBug.tsx, update the starter describe block and
 *     replace the todo tests with assertions that match your README acceptance criteria.
 */
import { render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { HydrationBug } from "./starter/HydrationBug";

const USER_NAME = "TestUser";

describe("HydrationBug, starter", () => {
  it("produces non-deterministic server HTML across renders", () => {
    const first = renderToString(<HydrationBug userName={USER_NAME} />);
    const second = renderToString(<HydrationBug userName={USER_NAME} />);

    expect(first).not.toEqual(second);
  });

  it("renders the user name correctly despite the bug", () => {
    render(<HydrationBug userName={USER_NAME} />);
    expect(screen.getByText(`Welcome, ${USER_NAME}`)).toBeInTheDocument();
  });
});

describe("HydrationBug, after your fix", () => {
  it.todo("produces deterministic server HTML across two renderToString calls");
  it.todo("shows stable placeholder values on the initial server render");
  it.todo("updates client-only metadata after mount without hydration mismatch");
});
