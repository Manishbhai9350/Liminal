// ScrollProvider.tsx

import React, { createContext, useRef } from "react";
import { ScrollEngine } from "./scroll.engine";

export const ScrollContext = createContext<ScrollEngine | null>(null);

export const ScrollProvider = ({
  children,
  paused = false,
}: {
  children: React.ReactNode;
  paused?: boolean;
}) => {
  const engineRef = useRef<ScrollEngine | null>(null);

  if (!engineRef.current) {
    engineRef.current = new ScrollEngine({ paused });
  }

  return (
    <ScrollContext.Provider value={engineRef.current}>
      {children}
    </ScrollContext.Provider>
  );
};
