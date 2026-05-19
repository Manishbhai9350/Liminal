import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loader.css";
import { useForwardProgress } from "../../hooks/useProgression";
import { SplitIt } from "../../utils";
import { useLoader } from "../../hooks/useLoader";

interface LoaderProps {
  entered: boolean;
  onEnter: ({ withAudio }: { withAudio: boolean }) => void;
}

const Loader = ({ entered, onEnter }: LoaderProps) => {
  const [close, setClose] = useState(false);
  const [unmount, setUnmount] = useState(false);

  const { setEntered, setWithAudio } = useLoader();

  const { progress, status } = useForwardProgress();
  const loaded = status === "loaded";

  const r = 88;
  const circumference = 2 * Math.PI * r;
  const dash = (progress / 100) * circumference;

  const loaderRef = useRef<HTMLDivElement>(null);
  const ringWrapRef = useRef<HTMLDivElement>(null);
  const progressCircRef = useRef<SVGCircleElement>(null);
  const enterBtnRef = useRef<HTMLButtonElement>(null);
  const silentBtnRef = useRef<HTMLButtonElement>(null);
  const hasAnimated = useRef(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // ── enter animation ───────────────────────────────────────
  useEffect(() => {
    if (!loaded || hasAnimated.current) return;
    hasAnimated.current = true;

    const btn = enterBtnRef.current;
    const silent = silentBtnRef.current;
    if (!btn || !silent) return;

    const split = SplitIt(btn, { type: "chars, lines" });

    // FIX: set both yPercent AND opacity so chars are properly hidden at start
    gsap.set(split.chars, { yPercent: 120, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.3, paused: false });

    // 1. button bg scaleX in
    tl.fromTo(
      btn,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        transformOrigin: "center center",
      },
    );

    // 2. letters rise up
    tl.to(
      split.chars,
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.1",
    );

    // 3. silent button fades in
    tl.fromTo(
      silent,
      { opacity: 0, y: 4 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.1",
    );

    tlRef.current = tl;

    return () => {
      split.revert();
    };
  }, [loaded]);

  // ── exit animation ────────────────────────────────────────
  useEffect(() => {
    if (!close) return;

    const loader = loaderRef.current;
    const ringWrap = ringWrapRef.current;
    const progCirc = progressCircRef.current;
    if (!loader || !ringWrap || !progCirc) return;

    const exitTl = gsap.timeline({
      onComplete: () => setUnmount(true),
    });

    // FIX: totalProgress(1) ensures the tl is at its end before reversing,
    // then reverse() plays it backwards. The returned timeline IS the same ref
    // so add it at position 0.
    if (tlRef.current) {
      tlRef.current.totalProgress(1); // snap to end in case delay hasn't passed
      exitTl.add(tlRef.current.reverse(), 0);
    }

    // 2. progress arc fades — target the actual SVG element via ref, not querySelector
    exitTl.to(
      progCirc,
      { opacity: 0, duration: 0.35, ease: "power2.in" },
      0.05,
    );

    // 3. ring wrap scales and fades — div ref, so GSAP tweens it cleanly
    exitTl.to(
      ringWrap,
      { scale: 0.82, opacity: 0, duration: 0.5, ease: "power3.in" },
      0.1,
    );

    // 4. full loader fades to black — starts before ring finishes so they overlap
    exitTl.to(
      loader,
      { opacity: 0, duration: 0.55, ease: "power2.inOut" },
      0.25,
    );
  }, [close]);

  if (unmount) return null;

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader__inner">
        <div ref={ringWrapRef} className="loader__ring-wrap">
          <svg className="loader__svg" viewBox="0 0 200 200">
            <circle className="loader__track" cx="100" cy="100" r={r} />
            <circle
              ref={progressCircRef}
              className="loader__progress"
              cx="100"
              cy="100"
              r={r}
              strokeDasharray={`${dash} ${circumference}`}
            />
          </svg>

          <div className="loader__center">
            <span
              className={`loader__number ${loaded ? "loader__number--hide" : ""}`}
            >
              {Math.floor(progress)}
            </span>

            <div
              className={`loader__enter-wrap ${loaded ? "loader__enter-wrap--show" : ""}`}
            >
              <button
                onClick={() => {
                  setEntered(true);
                  setWithAudio(true);
                  setClose(true);
                  onEnter({ withAudio: true });
                }}
                ref={enterBtnRef}
                className="loader__enter-btn"
              >
                Enter
              </button>
              <button
                onClick={() => {
                  setEntered(true);
                  setWithAudio(false);
                  setClose(true);
                  onEnter({ withAudio: false });
                }}
                ref={silentBtnRef}
                className="loader__enter-silent"
              >
                enter without sound
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
