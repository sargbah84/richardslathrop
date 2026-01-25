"use client";

import { ReactNode } from "react";
import { AccessProvider } from "./AccessGate";

export function Providers({ children }: { children: ReactNode }) {
  return <AccessProvider>{children}</AccessProvider>;
}
