import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

// ── types ─────────────────────────────────────────────────────────────────
interface LoaderContextValue {
  revealed: boolean;
  withAudio: boolean;
  entered: boolean;
  setWithAudio: Dispatch<SetStateAction<boolean>>;
  setEntered: Dispatch<SetStateAction<boolean>>;
  setRevealed: Dispatch<SetStateAction<boolean>>;
}

// ── context ───────────────────────────────────────────────────────────────
export const LoaderContext = createContext<LoaderContextValue>({
  revealed: false,
  withAudio: false,
  entered: false,
  setWithAudio: () => {},
  setEntered: () => {},
  setRevealed: () => {},
});

// ── provider ──────────────────────────────────────────────────────────────
interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [withAudio, setWithAudio] = useState(false);
  const [entered, setEntered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
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
