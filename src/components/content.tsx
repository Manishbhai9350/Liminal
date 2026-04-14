import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { DataType } from "../config/data";
import { useGSAP } from "@gsap/react";
import { SplitIt } from "../utils";
import gsap from "gsap";
import { SCENE_CONFIG } from "../config/scene.config";
import { useScroll } from "./scroll/useScroll";

interface ContentProps extends DataType {
  scene: "sceneA" | "sceneB";
  setLoaded: Dispatch<SetStateAction<boolean>>;
  loaded: boolean;
}

const Content = ({
  heading,
  heading2,
  description,
  scrollCue,
  sys,
  scene,
  loaded,
  setLoaded,
}: ContentProps) => {
  const ContentRef = useRef(null);
  const HeadingRef = useRef(null);
  const Heading2Ref = useRef(null);
  const DescriptionRef = useRef(null);
  const SysRef = useRef(null);
  const ScrollCueRef = useRef(null);
  const ProgressBarRef = useRef(null);
  const ProgressStatusRef = useRef(null);
  const ProgressBarParentRef = useRef(null);
  const ProgressRef = useRef(0);
  const HasInitialLoaded = useRef(false);
  const TimelineRef = useRef<gsap.core.Timeline | null>(null);

  const scroller = useScroll();

  useEffect(() => {
    if (!loaded) return;

    const update = ({ progress }: { progress: number }) => {
      ProgressRef.current = progress;

      if (scene === "sceneA") {
        if (ProgressStatusRef.current) {
          const percent = Math.floor(progress * 100)
            .toString()
            .padStart(2, "0");

          ProgressStatusRef.current!.innerHTML = `${percent}%`;

          gsap.set(ProgressBarRef.current, {
            scaleX: progress,
          });
        }

        if (TimelineRef.current) {
          const p = progress;
          const startProg = SCENE_CONFIG.sceneA.startProg;
          const endProg = SCENE_CONFIG.sceneA.endProg;
          const prog =
            Math.min(Math.max(p - startProg, 0), endProg - startProg) /
            (endProg - startProg);
          TimelineRef.current.progress(1 - prog);
        }
      }

      if (scene == "sceneB" && TimelineRef.current) {
        const p = progress;
        const startProg = SCENE_CONFIG.sceneB.startProg;
        const endProg = SCENE_CONFIG.sceneB.endProg;
        const prog =
          Math.min(Math.max(p - startProg, 0), endProg - startProg) /
          (endProg - startProg);
        TimelineRef.current.progress(prog);
      }
    };

    scroller.on("update", update);

    return () => {
      scroller.off("update", update);
    };
  }, [scroller, scene, loaded]);

  useGSAP(() => {
    let Timelines: gsap.core.Timeline[] = [];

    document.fonts.ready.then(() => {
      const SplittedHeadings = SplitIt(HeadingRef.current);
      const SplittedHeadings2 = SplitIt(Heading2Ref.current);
      const SplittedDescription = SplitIt(DescriptionRef.current);
      const SplittedSys = SplitIt(SysRef.current);
      const SplittedCue = SplitIt(ScrollCueRef.current);

      if (
        ProgressBarRef.current &&
        ProgressBarParentRef.current &&
        scene == "sceneA"
      ) {
        gsap.set([ProgressBarRef.current, ProgressBarParentRef.current], {
          opacity: 0,
          transformOrigin: "right",
        });
      }

      [
        SplittedHeadings,
        SplittedHeadings2,
        SplittedDescription,
        SplittedSys,
      ].forEach((Elem) =>
        gsap.set(Elem.words, {
          yPercent: 120,
        }),
      );

      gsap.set([...SplittedCue.words, ProgressStatusRef.current], {
        opacity: 0,
      });

      const HeadingTimeline = gsap.timeline({
        paused: scene == "sceneB",
        onStart() {
          gsap.set(ContentRef.current, {
            opacity: 1,
          });
        },
        onComplete: () => {
          if (HasInitialLoaded.current) return;
          setLoaded(true);
          HasInitialLoaded.current = true;
          if (scene === "sceneA") {
            HeadingTimeline.pause();
          }
        },
      });

      // sceneB starts frozen at 0
      if (scene === "sceneB") {
        HeadingTimeline.pause();
        HeadingTimeline.progress(0);
      }

      TimelineRef.current = HeadingTimeline;
      Timelines.push(HeadingTimeline);

      HeadingTimeline.to(SplittedHeadings.words, {
        delay: scene === "sceneA" ? 0.5 : 0,
        yPercent: 0,
        stagger: 0.07,
      });
      HeadingTimeline.to(SplittedHeadings2.words, {
        yPercent: 0,
        stagger: 0.03,
      });
      HeadingTimeline.to(
        SplittedDescription.words,
        {
          delay: 0.3,
          yPercent: 0,
          stagger: 0.01,
        },
        "<",
      );
      HeadingTimeline.to(
        SplittedSys.words,
        {
          delay: 0.3,
          yPercent: 0,
          stagger: 0.03,
        },
        "<",
      );
      HeadingTimeline.to(
        SplittedCue.words,
        {
          delay: 0.3,
          opacity: 1,
          stagger: 0.07,
        },
        "<",
      );
      if (scene == "sceneA") {
        gsap.to(ProgressStatusRef.current, {
          delay: HeadingTimeline.totalDuration(),
          opacity: 1,
          stagger: 0.07,
        });
        /* ProgBarTween =  */ gsap.to(ProgressBarRef.current, {
          delay: HeadingTimeline.totalDuration(),
          opacity: 1,
        });
        /* ProgBarParentTween =  */ gsap.to(ProgressBarParentRef.current, {
          delay: HeadingTimeline.totalDuration(),
          opacity: 1,
        });
      }
    });

    return () => {
      gsap.killTweensOf("*");
      Timelines.forEach((T) => T.kill());
    };
  });

  return (
    <div ref={ContentRef} className={`content ${scene.toLowerCase()}`}>
      <div className="typo">
        <h1 ref={HeadingRef} className="heading inter">
          {heading}
        </h1>
        <h2 ref={Heading2Ref} className="sub-heading poppins">
          {heading2}
        </h2>
        <p ref={DescriptionRef} className="description poppins">
          {description}
        </p>
      </div>
      <div className="sub-typo">
        <h2 ref={SysRef} className="sys poppins">
          {sys}
        </h2>
        <h3 ref={ScrollCueRef} className="scroll-cue poppins">
          {scrollCue}
        </h3>
        {scene == "sceneA" ? (
          <>
            <div
              ref={ProgressStatusRef}
              className="scroll-progress-number poppins"
            >
              00%
            </div>
            <div ref={ProgressBarParentRef} className="progress-bar">
              <div ref={ProgressBarRef} className="progress-bar-inside"></div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{ opacity: 0 }}
              className="scroll-progress-number poppins"
            >
              00%
            </div>
            <div style={{ opacity: 0 }} className="progress-bar">
              <div className="progress-bar-inside"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
