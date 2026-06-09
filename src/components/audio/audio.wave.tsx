import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoader } from "../../hooks/useLoader";

gsap.registerPlugin(useGSAP);

const AudioWave: React.FC = () => {
  const containerRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const phaseRef = useRef(0);
  const amplitudeRef = useRef(0); // 🔥 animated value

  const { entered, withAudio, ambient, setAmbient } = useLoader();

  // 🔒 STATIC CONFIG
  const width = 50;
  const height = 50;
  const TARGET_AMPLITUDE = 10;
  const frequency = 1;
  const duration = 2;

  // Generate sine path
  const generateWavePath = (phase: number): string => {
    const points: string[] = [];
    const numPoints = 100;
    const centerY = height / 2;

    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * width;

      const y =
        centerY +
        Math.sin((i / numPoints) * Math.PI * 2 * frequency + phase) *
          amplitudeRef.current;

      points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
    }

    return points.join(" ");
  };

  // 🔁 Phase animation (continuous wave movement)
  useGSAP(
    () => {
      if (!pathRef.current) return;

      pathRef.current.setAttribute("d", generateWavePath(phaseRef.current));

      animationRef.current = gsap.to(phaseRef, {
        current: Math.PI * 2,
        duration: duration,
        ease: "none",
        repeat: -1,
        paused: true, // 🔥 control manually
        onUpdate: () => {
          if (pathRef.current) {
            pathRef.current.setAttribute(
              "d",
              generateWavePath(phaseRef.current),
            );
          }
        },
      });

      return () => animationRef.current?.kill();
    },
    { scope: containerRef },
  );

  // 🎯 Amplitude intro animation (after entered)
  useEffect(() => {
    if (!entered) return;

    gsap.to(amplitudeRef, {
      current: withAudio ? TARGET_AMPLITUDE : 0,
      delay: 3,
      duration: 1.2,
      ease: "power3.out",
      onUpdate: () => {
        if (pathRef.current) {
          pathRef.current.setAttribute("d", generateWavePath(phaseRef.current));
        }
      },
    });
  }, [entered, withAudio]);

  // 🔊 Play/Pause based on ambient
  useEffect(() => {
    if (!animationRef.current) return;

    if (ambient) {
      animationRef.current.play();
    } else {
      animationRef.current.pause();
    }
    gsap.to(amplitudeRef, {
      current: ambient ? TARGET_AMPLITUDE : 0,
      duration: 1.2,
      ease: "power3.out",
      onUpdate: () => {
        if (pathRef.current) {
          pathRef.current.setAttribute("d", generateWavePath(phaseRef.current));
        }
      },
    });
  }, [ambient]);

  // 👁 Fade in SVG
  useGSAP(() => {
    if (entered) {
      gsap.to(".sound-svg", {
        opacity: 1,
        pointerEvents: "all",
        delay: 3,
      });
    }
  }, [entered]);

  return (
    <div
      onClick={() => setAmbient((a) => !a)}
      className="sound-svg"
      style={{ opacity: 0, pointerEvents: "none" }}
    >
      <svg
        ref={containerRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ overflow: "hidden", display: "block" }}
      >
        <path
          ref={pathRef}
          fill="none"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AudioWave;
