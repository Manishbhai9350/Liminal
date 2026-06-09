import { createContext, type Dispatch, type SetStateAction } from "react";

// ── types ─────────────────────────────────────────────────────────────────
interface LoaderContextValue {
  ambient: boolean;
  revealed: boolean;
  withAudio: boolean;
  entered: boolean;
  setAmbient: Dispatch<SetStateAction<boolean>>;
  setWithAudio: Dispatch<SetStateAction<boolean>>;
  setEntered: Dispatch<SetStateAction<boolean>>;
  setRevealed: Dispatch<SetStateAction<boolean>>;
}

// ── context ───────────────────────────────────────────────────────────────
export const LoaderContext = createContext<LoaderContextValue>({
  ambient: false,
  revealed: false,
  withAudio: false,
  entered: false,
  setAmbient: () => {},
  setWithAudio: () => {},
  setEntered: () => {},
  setRevealed: () => {},
});
