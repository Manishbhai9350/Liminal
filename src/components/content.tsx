import { useRef, useState } from "react";
import type { DataType } from "../config/data";
import { useGSAP } from "@gsap/react";
import { SplitIt } from "../utils";
import gsap from "gsap";
import { useLenis } from "lenis/react";

interface ContentProps extends DataType {
  scene: "sceneA" | "sceneB";
}
const Content = ({
  heading,
  heading2,
  description,
  scrollCue,
  sys,
  scene,
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

  lenis?.on("scroll", (l) => {
    const p = l.progress;
    ProgressRef.current = p;
    ProgressStatusRef.current.innerHTML = `${Math.floor(ProgressRef.current * 100)}%`;
    gsap.killTweensOf([ProgressBarRef.current]);
    gsap.to(ProgressBarRef.current, {
      scaleX: p,
    });
  });

  useGSAP(() => {
    ProgressRef.current =
      lenis?.progress || window.scrollY / window.scrollMaxY || 0;
    ProgressStatusRef.current.innerHTML = `${Math.floor(ProgressRef.current * 100)}%`;
    const SplittedHeadings = SplitIt(HeadingRef.current);
    const SplittedHeadings2 = SplitIt(Heading2Ref.current);
    const SplittedDescription = SplitIt(DescriptionRef.current);
    const SplittedSys = SplitIt(SysRef.current);
    const SplittedCue = SplitIt(ScrollCueRef.current);
    const SplittedProgressStatus = SplitIt(ProgressStatusRef.current);

    ProgressStatusRef.current;

    if (ProgressBarRef.current && ProgressBarParentRef.current) {
      gsap.set([ProgressBarRef.current, ProgressBarParentRef.current], {
        scaleX: 0,
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

    [SplittedCue, SplittedProgressStatus].forEach((Elem) =>
      gsap.set(Elem.words, {
        opacity: 0,
      }),
    );

    const HeadingTimeline = gsap.timeline();
    HeadingTimeline.to(SplittedHeadings.words, {
      delay: 0.5,
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
    HeadingTimeline.to(SplittedProgressStatus.words, {
      opacity: 1,
    });
    HeadingTimeline.to(ProgressBarParentRef.current, {
      scaleX: 1,
    });
    HeadingTimeline.to(ProgressBarRef.current, {
      scaleX: ProgressRef.current,
    });
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
