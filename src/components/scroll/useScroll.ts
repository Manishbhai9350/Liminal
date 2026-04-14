// useScroll.ts

import { useContext } from "react";
import { ScrollContext } from "./scroll.provider";

export const useScroll = () => {
  const ctx = useContext(ScrollContext);

  if (!ctx) {
    throw new Error("useScroll must be used inside ScrollProvider");
  }

  return ctx;
};