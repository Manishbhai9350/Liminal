import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DATA } from "../../config/data";
import Content from "./content";
import { useScroll } from "../scroll/useScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const UI = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [LoadedA, setLoadedA] = useState<boolean>(false);
  const [LoadedB, setLoadedB] = useState(false);

  const scroller = useScroll();

  useEffect(() => {
    if (LoadedA && LoadedB) {
      scroller.resume();
    }

    return () => {};
  }, [LoadedA, LoadedB]);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    console.log(cursor)

    let hasStarted = false;

    const mouseMove = (e: MouseEvent) => {
      // Smooth follow with GSAP
      gsap.killTweensOf(cursor)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });

      // First move → fade in
      if (!hasStarted) {
        hasStarted = true;
        gsap.to(cursor, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const mouseLeave = () => {
      hasStarted = false;

      gsap.to(cursor, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const mouseEnter = () => {
      // wait for movement again
      hasStarted = false;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mouseenter", mouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  return (
    <div className="ui">
      <div ref={cursorRef} className="cursor"></div>
      <Content
        loaded={LoadedA}
        setLoaded={setLoadedA}
        scene="sceneA"
        {...DATA.sceneA}
      />
      <Content
        loaded={LoadedB}
        setLoaded={setLoadedB}
        scene="sceneB"
        {...DATA.sceneB}
      />
    </div>
  );
};

export default UI;
