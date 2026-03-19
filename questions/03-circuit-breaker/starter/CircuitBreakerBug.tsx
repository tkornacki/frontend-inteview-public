import { useEffect, useMemo, useRef, useState } from "react";

type Row = {
  id: number;
  value: string;
};

const BURST_LIMIT = 8;
const WINDOW_MS = 1200;
const COOLDOWN_MS = 3000;

export function CircuitBreakerBug() {
  const [rows, setRows] = useState<Row[]>([]);
  const [renderPulse, setRenderPulse] = useState(0);
  const [breakerOpenUntil, setBreakerOpenUntil] = useState<number | null>(null);
  const clickTimes = useRef<number[]>([]);

  const breakerOpen = breakerOpenUntil !== null && Date.now() < breakerOpenUntil;

  function addRows() {
    const now = Date.now();

    clickTimes.current = clickTimes.current.filter((ts) => now - ts < WINDOW_MS);
    clickTimes.current.push(now);

    if (clickTimes.current.length > BURST_LIMIT) {
      setBreakerOpenUntil(now + COOLDOWN_MS);
      return;
    }

    const nextRows: Row[] = Array.from({ length: 20 }, (_, index) => ({
      id: rows.length + index + 1,
      value: `Row ${rows.length + index + 1}`,
    }));

    setRows([...rows, ...nextRows]);
  }

  useEffect(() => {
    if (rows.length === 0) return;

    // Intentional bug for interview:
    // this effect writes state on every render path tied to rows.
    setRenderPulse((n) => n + 1);
    if (renderPulse % 2 === 0) {
      setRows((prev) => [...prev]);
    }
  }, [rows, renderPulse]);

  const totalChars = useMemo(() => rows.reduce((acc, row) => acc + row.value.length, 0), [rows]);

  const secondsLeft =
    breakerOpenUntil === null ? 0 : Math.max(0, Math.ceil((breakerOpenUntil - Date.now()) / 1000));

  return (
    <section>
      <h2>Circuit Breaker Table</h2>
      <button disabled={breakerOpen} onClick={addRows} type="button">
        Add 20 rows
      </button>
      <button onClick={() => setBreakerOpenUntil(null)} type="button">
        Reset breaker
      </button>
      <p>Rows: {rows.length}</p>
      <p>Total chars: {totalChars}</p>
      <p>Render pulse: {renderPulse}</p>
      <p>Status: {breakerOpen ? `OPEN for ${secondsLeft}s` : "CLOSED"}</p>

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
