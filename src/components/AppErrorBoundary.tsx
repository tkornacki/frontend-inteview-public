import { Component, type ErrorInfo, type ReactNode } from "react";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

// Keeps the interview suite usable by showing a fallback UI if a single question crashes during render.
export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  public constructor(props: AppErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Unhandled render error", error, info.componentStack);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main style={{ fontFamily: "sans-serif", padding: 16, maxWidth: 900 }}>
          <h1>Frontend Interview Pack</h1>
          <p>The app hit an unexpected error while rendering this scenario.</p>
          <p>Refresh the page or switch to another question.</p>
        </main>
      );
    }

    return this.props.children;
  }
}
