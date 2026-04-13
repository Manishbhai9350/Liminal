import { useRef } from "react";
import type { DataType } from "../config/data";
import { useGSAP } from "@gsap/react";
import { SplitIt } from "../utils";
import gsap from "gsap";

interface ContentProps extends DataType {}

const Content = ({
  heading,
  heading2,
  description,
  scrollCue,
  sys,
}: ContentProps) => {
  const ContentRef = useRef(null);
  const HeadingRef = useRef(null);
  const Heading2Ref = useRef(null);
  const DescriptionRef = useRef(null);
  const SysRef = useRef(null);
  const ScrollCueRef = useRef(null);
  const ProgressBarRef = useRef(null);
  const ProgressStatusRef = useRef(null);

  useGSAP(() => {
    const SplittedHeadings = SplitIt(HeadingRef.current, {
      type: "words, lines",
      mask: "lines",
    });
    gsap.set(SplittedHeadings.words, {
      yPercent: 100,
    });
    gsap.to(SplittedHeadings.words, {
      delay: 1,
      yPercent: 0,
      stagger: 0.07,
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
          13%
        </div>
        <div className="progress-bar">
          <div ref={ProgressBarRef} className="progress-bar-inside"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
