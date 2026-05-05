// ScrollProvider.tsx

import React, { createContext, useRef } from "react";
import { ScrollEngine } from "./scroll.engine";

export const ScrollContext = createContext<ScrollEngine | null>(null);

export const ScrollProvider = ({
  children,
  paused = false,
  max
}: {
  children: React.ReactNode;
  paused?: boolean;
  max?: number;
}) => {
  const engineRef = useRef<ScrollEngine | null>(null);

  if (!engineRef.current) {
    engineRef.current = new ScrollEngine({ paused, max });
  }

  return (
    <ScrollContext.Provider value={engineRef.current}>
      {children}
    </ScrollContext.Provider>
  );
};
