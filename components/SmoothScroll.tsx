"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.15, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
