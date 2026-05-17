import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { InBounds, InRange } from "../utils";
import { useScroll } from "./scroll/useScroll";
import type { SceneMode } from "../scene/components/Experience";
import { SCENE_BOUNDS, SCENE_CONFIG } from "../config/scene.config";

interface ScrollUpdateProps {
  mode: SceneMode;
  setMode: Dispatch<SetStateAction<SceneMode>>;
}

export const ScrollUpdate = ({ mode, setMode }: ScrollUpdateProps) => {
  const scroll = useScroll();
  const modeRef = useRef<SceneMode>(mode);

  useEffect(() => {
    const onScroll = (e: {
      progress: number;
      current: number;
      target: number;
    }) => {
      const prog = e.progress;

      const IsInAToB = InRange(
        prog,
        SCENE_CONFIG.transitionAtoB.startProg,
        SCENE_CONFIG.transitionAtoB.endProg,
      );
      const IsInBToA = InRange(
        prog,
        SCENE_CONFIG.transitionBtoA.startProg,
        SCENE_CONFIG.transitionBtoA.endProg,
      );

      if (IsInAToB && modeRef.current !== "TransitionToB") {
        setMode("TransitionToB");
        modeRef.current = "TransitionToB";
        // console.log("To B");
      } else if (IsInBToA && modeRef.current !== "TransitionToA") {
        setMode("TransitionToA");
        modeRef.current = "TransitionToA";
        // console.log("To A");
      } else if (!IsInAToB && !IsInBToA) {
        let InA = InBounds(prog, SCENE_BOUNDS.A);
        if (InA && modeRef.current !== "A") {
          setMode("A");
          modeRef.current = "A";
        }
        let InB = InBounds(prog, SCENE_BOUNDS.B);
        if (InB && modeRef.current !== "B") {
          setMode("B");
          modeRef.current = "B";
          // console.log("In B");
        }
      }
    };

    scroll.on("update", onScroll);

    return () => {
      scroll.off("update", onScroll);
    };
  }, []);

  return null;
};
