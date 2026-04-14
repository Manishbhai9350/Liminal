import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import type { DataType } from "../config/data";
import { useGSAP } from "@gsap/react";
import { SplitIt } from "../utils";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCENE_CONFIG } from "../config/scene.config";

gsap.registerPlugin(ScrollTrigger);

interface ContentProps extends DataType {
  scene: "sceneA" | "sceneB";
  setLoaded: Dispatch<SetStateAction<boolean>>;
}

const Content = ({
  heading,
  heading2,
  description,
  scrollCue,
  sys,
  scene,
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

  const [ProgressStatus, setProgressStatus] = useState(0);

  const lenis = useLenis((l) => {});

  useGSAP(() => {
    let scrollTriggerInstance: ScrollTrigger | null = null;
    let Timelines: gsap.core.Timeline[] = [];
    let ProgBarTween: gsap.core.Timeline;
    let ProgBarParentTween: gsap.core.Timeline;

    document.fonts.ready.then(() => {
      ProgressRef.current =
        lenis?.progress || window.scrollY / window.scrollMaxY || 0;
      ProgressStatusRef.current.innerHTML = `${Math.floor(ProgressRef.current * 100)}%`;

      const SplittedHeadings = SplitIt(HeadingRef.current);
      const SplittedHeadings2 = SplitIt(Heading2Ref.current);
      const SplittedDescription = SplitIt(DescriptionRef.current);
      const SplittedSys = SplitIt(SysRef.current);
      const SplittedCue = SplitIt(ScrollCueRef.current);

      if (ProgressBarRef.current && ProgressBarParentRef.current) {
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
        onStart() {
          gsap.set(ContentRef.current, {
            opacity: 1,
          });
        },
        onComplete: () => {
          setLoaded(true);
          if (scene === "sceneA") {
            HeadingTimeline.pause();

            HeadingTimeline.remove(ProgBarTween);
            HeadingTimeline.remove(ProgBarParentTween);
            // gsap.killTweensOf([
            //   ProgressBarRef.current,
            //   ProgressBarParentRef.current,
            // ]);
            scrollTriggerInstance = ScrollTrigger.create({
              trigger: "main",
              start: "top top",
              end: "bottom bottom",
              onUpdate(e) {
                const p = e.progress;
                const startProg = SCENE_CONFIG.sceneA.startProg;
                const endProg = SCENE_CONFIG.sceneA.endProg;
                const prog =
                  Math.min(Math.max(p - startProg, 0), endProg - startProg) /
                  (endProg - startProg);
                HeadingTimeline.progress(1 - prog);
              },
            });
          }

          if (scene === "sceneB") {
            HeadingTimeline.pause();

            scrollTriggerInstance = ScrollTrigger.create({
              trigger: "main",
              start: "top top",
              end: "bottom bottom",
              onUpdate(e) {
                const p = e.progress;
                const startProg = SCENE_CONFIG.sceneB.startProg;
                const endProg = SCENE_CONFIG.sceneB.endProg;
                const prog =
                  Math.min(Math.max(p - startProg, 0), endProg - startProg) /
                  (endProg - startProg);
                HeadingTimeline.progress(prog);
              },
            });
          }
        },
      });

      // sceneB starts frozen at 0
      if (scene === "sceneB") {
        HeadingTimeline.pause();
        HeadingTimeline.progress(0);
      }

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
        [...SplittedCue.words, ProgressStatusRef.current],
        {
          delay: 0.3,
          opacity: 1,
          stagger: 0.07,
        },
        "<",
      );
      ProgBarTween = HeadingTimeline.to(ProgressBarRef.current, {
        opacity: 1,
      });
      ProgBarParentTween = HeadingTimeline.to(ProgressBarParentRef.current, {
        opacity: 1,
      });

      ScrollTrigger.create({
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        onUpdate(e) {
          if (!ProgressStatusRef.current) return;
          const p = e.progress;
          gsap.set(ProgressBarRef.current,{
            scaleX:p
          })
          ProgressRef.current = p;
          ProgressStatusRef.current.innerHTML = `${Math.floor(ProgressRef.current * 100)}%`;
        },
      });
    });

    return () => {
      scrollTriggerInstance?.kill();
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((st) => st.kill());
      Timelines.forEach((T) => T.kill());
    };
  });

  return (
    <div ref={ContentRef} className="content">
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
        <div ref={ProgressStatusRef} className="scroll-progress-number poppins">
          {ProgressStatus}%
        </div>
        <div ref={ProgressBarParentRef} className="progress-bar">
          <div ref={ProgressBarRef} className="progress-bar-inside"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
