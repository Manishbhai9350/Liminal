import { useContext } from "react";
import { LoaderContext } from "../context/loader.context";

// ── hook ──────────────────────────────────────────────────────────────────
export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used inside <LoaderProvider>");
  return ctx;
};
