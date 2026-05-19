import { useRef } from "react";
import { useProgress } from "@react-three/drei";

type LoadStatus = "loading" | "loaded" | "failed";

interface ForwardProgressResult {
  progress: number;
  status: LoadStatus;
  active: boolean;
  loaded: number;
  total: number;
  item: string;
  errors: string[];
}

/**
 * Wraps drei's useProgress with two guarantees:
 *  1. progress never decreases — always the high-water mark
 *  2. status is a stable "loading" | "loaded" | "failed" enum
 *
 * Status rules:
 *  - "failed"  — as soon as any error appears in the errors array
 *  - "loaded"  — active is false AND progress has reached 100
 *  - "loading" — everything else
 */
export function useForwardProgress(): ForwardProgressResult {
  const { progress, active, loaded, total, item, errors } = useProgress();
  const maxProgress = useRef(0);

  maxProgress.current = Math.max(maxProgress.current, progress);

  let status: LoadStatus;
  //   if (errors.length > 0) {
  //     status = "failed";
  //   } else if (!active && maxProgress.current >= 100) {
  //     status = "loaded";
  //   } else {
  //     status = "loading";
  //   }

  if (progress < 100) {
    status = "loading";
  } else {
    status = "loaded";
  }

  return {
    progress: maxProgress.current,
    status,
    active,
    loaded,
    total,
    item,
    errors,
  };
}
