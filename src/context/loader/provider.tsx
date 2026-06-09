import { useState, type ReactNode } from "react";
import { LoaderContext } from "./loader.context";

// ── provider ──────────────────────────────────────────────────────────────
interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [ambient, setAmbient] = useState(false);
  const [withAudio, setWithAudio] = useState(false);
  const [entered, setEntered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        ambient,
        setAmbient,
        withAudio,
        entered,
        setWithAudio,
        setEntered,
        revealed,
        setRevealed,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
