import type { ReactElement } from "react";

export function Nav(): ReactElement {
  return (
    <nav style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <a href="/?q=1">Question 1</a>
      <a href="/?q=2">Question 2</a>
      <a href="/?q=3">Question 3</a>
    </nav>
  );
}
