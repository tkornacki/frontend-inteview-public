import { useEffect, useMemo, useState } from "react";

type Row = {
  id: number;
  value: string;
};

/**
 * Easy starter: stripped down to the core bug.
 * The table appends rows on click, but rapid use causes
 * the UI to lock up with repeated renders.
 *
 * Find and fix the render feedback loop.
 */
export function CircuitBreakerBugEasy() {
  const [rows, setRows] = useState<Row[]>([]);
  const [renderPulse, setRenderPulse] = useState(0);

  function addRows() {
    const nextRows: Row[] = Array.from({ length: 20 }, (_, index) => ({
      id: rows.length + index + 1,
      value: `Row ${rows.length + index + 1}`,
    }));

    setRows([...rows, ...nextRows]);
  }

  useEffect(() => {
    if (rows.length === 0) return;

    setRenderPulse((n) => n + 1);
    if (renderPulse % 2 === 0) {
      setRows((prev) => [...prev]);
    }
  }, [rows, renderPulse]);

  const totalChars = useMemo(() => rows.reduce((acc, row) => acc + row.value.length, 0), [rows]);

  return (
    <section>
      <h2>Circuit Breaker Table</h2>
      <button onClick={addRows} type="button">
        Add 20 rows
      </button>
      <p>Rows: {rows.length}</p>
      <p>Total chars: {totalChars}</p>
      <p>Render pulse: {renderPulse}</p>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
