// ScrollProvider.tsx

import React, { createContext, useRef } from "react";
import { ScrollEngine, type SnapZone, type LerpFn } from "./scroll.engine";

export const ScrollContext = createContext<ScrollEngine | null>(null);

export const ScrollProvider = ({
  children,
  paused = false,
  max,
  lerp,
  lerpFn,
  snapConfig,
  snapIdleMs,
}: {
  children: React.ReactNode;
  paused?: boolean;
  max?: number;
  /** Global lerp factor (default: 0.08). */
  lerp?: number;
  /** Global lerp function override. Receives (current, target, factor) → next current. */
  lerpFn?: LerpFn;
  /** Snap zones. Each zone can override snapIdleMs, lerp, and lerpFn individually. */
  snapConfig?: SnapZone[];
  /** Global idle time (ms) before snapping fires (default: 120). */
  snapIdleMs?: number;
}) => {
  const engineRef = useRef<ScrollEngine | null>(null);

  if (!engineRef.current) {
    engineRef.current = new ScrollEngine({
      paused,
      max,
      lerp,
      lerpFn,
      snapConfig,
      snapIdleMs,
    });
  }

  return (
    <ScrollContext.Provider value={engineRef.current}>
      {children}
    </ScrollContext.Provider>
  );
};