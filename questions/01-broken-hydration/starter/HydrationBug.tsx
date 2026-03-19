import { useMemo } from "react";

type Props = {
  userName: string;
};

export function HydrationBug({ userName }: Props) {
  const serverSensitiveId = useMemo(() => Math.random().toString(36).slice(2), []);
  const renderTime = new Date().toISOString();

  return (
    <section>
      <h2>Welcome, {userName}</h2>
      <p>Session id: {serverSensitiveId}</p>
      <p>Rendered at: {renderTime}</p>
      <small>Refresh and compare with server output.</small>
    </section>
  );
}
