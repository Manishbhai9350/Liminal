import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBO, Stats } from "@react-three/drei";
import * as THREE from "three";
import { Leva, useControls } from "leva";
import { useEffect, useRef } from "react";

import HandScene from "./scene";
import SceneEnv from "../../components/env/environment";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { CircularTransition } from "../../components/postprocessing/effects/CircularTransition";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SceneMode = "A" | "B" | "transition";

type SceneColors = { colorA: string; colorB: string; colorC: string };
type Transform = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};
type MouseRef = React.MutableRefObject<{ x: number; y: number }>;

// ─── Scene configs ────────────────────────────────────────────────────────────

const CONFIG: Record<"A" | "B", { colors: SceneColors; variant: string }> = {
  A: {
    colors: { colorA: "#000000", colorB: "#2800c7", colorC: "#00b5f2" },
    variant: "arm1",
  },
  B: {
    colors: { colorA: "#db4242", colorB: "#b10000", colorC: "#000000" },
    variant: "arm2",
  },
};

// ─── SceneContent ─────────────────────────────────────────────────────────────
// The ONE shared component. Config swap = scene swap.

type SceneContentProps = Transform & { which: "A" | "B"; mouse: MouseRef };

const SceneContent = ({ which, mouse, position, rotation, scale }: SceneContentProps) => {
  const { colors, variant } = CONFIG[which];
  return (
    <>
      <SceneEnv />
      <HandScene
        mouse={mouse}
        variant={variant}
        scale={scale}
        position={position}
        rotation={rotation}
        {...colors}
      />
    </>
  );
};

// ─── FBOCapture ───────────────────────────────────────────────────────────────
// Isolated component — only mounts in transition mode.
// Owns useFBO and useFrame so they never run in A/B mode.
//
// Each frame:
//   1. Makes SceneB group visible
//   2. Renders full scene into FBO (SceneB visible, SceneA also visible —
//      if you want only SceneB in the FBO, hide SceneA's group ref too)
//   3. Hides SceneB group again
//   4. Default render fires and draws SceneA to screen

type FBOCaptureProps = {
  sceneBRef: React.MutableRefObject<THREE.Group | null>;
  onFBO: (texture: THREE.Texture) => void;
};

const FBOCapture = ({ sceneBRef, onFBO }: FBOCaptureProps) => {
  const { gl, scene, camera } = useThree();
  const fbo = useFBO(1024, 1024);

  useFrame(() => {
    const group = sceneBRef.current;
    if (!group) return;

    group.visible = true;
    gl.setRenderTarget(fbo);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    group.visible = false;

    onFBO(fbo.texture);
  }, 1); // runs before default render

  return null;
};

// ─── SceneRenderer ────────────────────────────────────────────────────────────
// No hooks above the conditional returns — each mode is fully isolated.

type SceneRendererProps = {
  mode: SceneMode;
  mouse: MouseRef;
  transformA: Transform;
  transformB: Transform;
  onFBO?: (texture: THREE.Texture) => void;
};

const SceneRenderer = ({ mode, mouse, transformA, transformB, onFBO }: SceneRendererProps) => {
  // Only used in transition mode — safe because this ref is just a plain object
  const sceneBRef = useRef<THREE.Group | null>(null);

  if (mode === "A") {
    return <SceneContent which="A" mouse={mouse} {...transformA} />;
  }

  if (mode === "B") {
    return <SceneContent which="B" mouse={mouse} {...transformB} />;
  }

  // transition — SceneA renders to screen, SceneB captured into FBO
  return (
    <>
      <SceneContent which="A" mouse={mouse} {...transformA} />

      {/* SceneB lives in the scene graph but is invisible by default.
          FBOCapture toggles it on only during the FBO render pass. */}
      <group ref={sceneBRef} visible={false}>
        <SceneContent which="B" mouse={mouse} {...transformB} />
      </group>

      {/* FBOCapture only mounts here — useFBO/useFrame never run in A or B mode */}
      {onFBO && <FBOCapture sceneBRef={sceneBRef} onFBO={onFBO} />}
    </>
  );
};

// ─── Experience ───────────────────────────────────────────────────────────────

type ExperienceProps = {
  mode?: SceneMode;
  onFBO?: (texture: THREE.Texture) => void;
};

const Experience = ({ mode = "A", onFBO }: ExperienceProps) => {
  const {
    posX, posY, posZ, scale, rotX, rotY, rotZ,
    posX2, posY2, posZ2, scale2, rotX2, rotY2, rotZ2,
  } = useControls("Scene Controls", {
    posX:  { value: -2.2, min: -10, max: 10, step: 0.1 },
    posY:  { value: -12,  min: -15, max: 10, step: 0.1 },
    posZ:  { value: -10,  min: -10, max: 10, step: 0.1 },
    scale: { value: 1,    min: 0.1, max: 5,  step: 0.01 },
    rotX:  { value: 0.25, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rotY:  { value: 4.55, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rotZ:  { value: 0,    min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    posX2:  { value: 0,   min: -10, max: 10, step: 0.1 },
    posY2:  { value: 0.5, min: -10, max: 10, step: 0.1 },
    posZ2:  { value: 0,   min: -10, max: 10, step: 0.1 },
    scale2: { value: 3.5, min: 0.1, max: 5,  step: 0.01 },
    rotX2:  { value: Math.PI / 2, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rotY2:  { value: Math.PI / 2, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rotZ2:  { value: 0,           min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  }, { collapsed: true });

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / innerWidth  - 0.5) * 2;
      mouse.current.y = -(e.clientY / innerHeight - 0.5) * 2;
    };
    const onLeave = () => { mouse.current.x = 0; mouse.current.y = 0; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const transformA: Transform = {
    position: [posX, posY, posZ],
    rotation: [rotX, rotY, rotZ],
    scale,
  };

  const transformB: Transform = {
    position: [posX2, posY2, posZ2],
    rotation: [rotX2, rotY2, rotZ2],
    scale: scale2,
  };

  const fbo = useRef(null)

  return (
    <>
      <Leva collapsed />
      <Canvas
        className="canvas-scene"
        gl={{ toneMapping: THREE.NeutralToneMapping }}
      >
        <Stats />
        <EffectComposer>
          {/* <Vignette /> */}
          <CircularTransition />
        </EffectComposer>
        <SceneRenderer
          mode={mode}
          mouse={mouse}
          transformA={transformA}
          transformB={transformB}
          onFBO={t => {
            fbo.current = t
          }}
        />
      </Canvas>
    </>
  );
};

export default Experience;