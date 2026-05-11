import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBO, Stats, CameraControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { Leva, useControls } from "leva";
import { forwardRef, useEffect, useMemo, useRef } from "react";

import HandScene from "./scene";
import SceneEnv from "../../components/env/environment";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { CircularTransition } from "../../components/postprocessing/effects/CircularTransition";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SceneMode = "A" | "B" | "TransitionToB" | "TransitionToA";

type SceneColors = {
  color: string;
  colorA: string;
  colorB: string;
  colorC: string;
};
type Transform = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};
type MouseRef = React.MutableRefObject<{ x: number; y: number }>;

// ─── Scene configs ────────────────────────────────────────────────────────────

const CONFIG: Record<"A" | "B", { colors: SceneColors; variant: string }> = {
  A: {
    colors: {
      color: "#0000ff",
      colorA: "#000000",
      colorB: "#2800c7",
      colorC: "#00b5f2",
    },
    variant: "arm1",
  },
  B: {
    colors: {
      color: "#ff0000",
      colorA: "#db4242",
      colorB: "#b10000",
      colorC: "#000000",
    },
    variant: "hand2",
  },
};

// ─── SceneContent ─────────────────────────────────────────────────────────────
// The ONE shared component. Config swap = scene swap.

type SceneContentProps = Transform & {
  which: "A" | "B";
  mouse: MouseRef;
  color: string;
};

const SceneContent = ({
  which,
  mouse,
  position,
  rotation,
  scale,
}: SceneContentProps) => {
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
  sceneARef: React.MutableRefObject<THREE.Group | null>;
  sceneBRef: React.MutableRefObject<THREE.Group | null>;
  mode: SceneMode;
  onFBO: (texture: THREE.Texture) => void;
};

const FBOCapture = ({
  sceneARef,
  sceneBRef,
  tempRef,
  mode,
  onFBO,
}: FBOCaptureProps) => {
  const { gl, scene, camera } = useThree();
  const fbo = useFBO(256, 256);

  useFrame(() => {
    const groupA = sceneARef.current;
    const groupB = sceneBRef.current;
    if (!groupA || !groupB || !tempRef.current) return;

    tempRef.current.visible = false;
    // If Current Scene Is A Then;
    if (mode == "A") {
      // Only Render Scene A;
      groupA.visible = true;
      groupB.visible = false;
      gl.setRenderTarget(null);
    } else if (mode == "B") {
      // Only Render Scene B;
      groupB.visible = true;
      groupA.visible = false;
      gl.setRenderTarget(null);
    } else if (mode == "TransitionToB") {
      groupA.visible = false;
      groupB.visible = true;

      gl.setRenderTarget(fbo);
      gl.clearColor(); // ← clear color buffer
      gl.clearDepth(); // ← clear depth buffer
      gl.render(scene, camera);
      gl.setRenderTarget(null);

      groupA.visible = true;
      groupB.visible = false;
      tempRef.current.visible = true;
    } else if (mode == "TransitionToA") {
      groupA.visible = true;
      groupB.visible = false;

      gl.setRenderTarget(fbo);
      gl.clearColor(); // ← clear color buffer
      gl.clearDepth(); // ← clear depth buffer
      gl.render(scene, camera);
      gl.setRenderTarget(null);

      groupA.visible = false;
      groupB.visible = true;
      tempRef.current.visible = true;
    }

    tempRef.current.children[0].material.map = fbo.texture;
    onFBO(fbo.texture);
  }, 1); // runs before default render

  useFrame(() => {
    if (!tempRef.current) return;
  });

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

const SceneRenderer = ({
  mode,
  mouse,
  transformA,
  transformB,
  onFBO,
}: SceneRendererProps) => {
  // Only used in transition mode — safe because this ref is just a plain object
  const sceneARef = useRef<THREE.Group | null>(null);
  const sceneBRef = useRef<THREE.Group | null>(null);
  const tempRef = useRef(null);

  const initVisibleA = useMemo(() => mode == "A", []);
  const initVisibleB = useMemo(() => mode == "B", []);

  return (
    <>
      <group ref={tempRef}>
        <TempMesh />
      </group>

      <group ref={sceneARef} visible={initVisibleA}>
        {/* <Text position={[0,-2,0]}>
          Scene A
        </Text> */}
        <SceneContent color="#0029ff" which="A" mouse={mouse} {...transformA} />
      </group>

      {/* SceneB lives in the scene graph but is invisible by default.
          FBOCapture toggles it on only during the FBO render pass. */}
      <group ref={sceneBRef} visible={initVisibleB}>
        {/* <Text position={[0,-2,0]}>
            Scene B
          </Text> */}
        <SceneContent color="#ff0000" which="B" mouse={mouse} {...transformB} />
      </group>

      {/* FBOCapture only mounts here — useFBO/useFrame never run in A or B mode */}
      {onFBO && (
        <FBOCapture
          mode={mode}
          sceneARef={sceneARef}
          sceneBRef={sceneBRef}
          tempRef={tempRef}
          onFBO={onFBO}
        />
      )}
    </>
  );
};

// ─── Experience ───────────────────────────────────────────────────────────────

type ExperienceProps = {
  mode?: SceneMode;
  onFBO?: (texture: THREE.Texture) => void;
};

export const TempMesh = () => {
  const meshRef = useRef(null);

  const { width, height } = useThree((v) => v.viewport);

  const w = 5 / 2;
  const h =  w * height / width;

  return (
    <mesh position={[-(width - w) / 2, -(height - h) / 2, 0]} ref={meshRef}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial />
    </mesh>
  );
};

const Experience = ({ mode = "A", onFBO }: ExperienceProps) => {
  const {
    posX,
    posY,
    posZ,
    scale,
    rotX,
    rotY,
    rotZ,
    posX2,
    posY2,
    posZ2,
    scale2,
    rotX2,
    rotY2,
    rotZ2,
  } = useControls(
    "Scene Controls",
    {
      posX: { value: -2.2, min: -10, max: 10, step: 0.1 },
      posY: { value: -12, min: -15, max: 10, step: 0.1 },
      posZ: { value: -10, min: -10, max: 10, step: 0.1 },
      scale: { value: 1, min: 0.1, max: 5, step: 0.01 },
      rotX: { value: 0.25, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      rotY: { value: 4.55, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      rotZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      posX2: { value: 0, min: -10, max: 10, step: 0.1 },
      posY2: { value: 0.5, min: -10, max: 10, step: 0.1 },
      posZ2: { value: 0, min: -10, max: 10, step: 0.1 },
      scale2: { value: 3.5, min: 0.1, max: 5, step: 0.01 },
      rotX2: {
        value: Math.PI / 2,
        min: -Math.PI * 2,
        max: Math.PI * 2,
        step: 0.01,
      },
      rotY2: {
        value: Math.PI / 2,
        min: -Math.PI * 2,
        max: Math.PI * 2,
        step: 0.01,
      },
      rotZ2: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    },
    { collapsed: true },
  );

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / innerHeight - 0.5) * 2;
    };
    const onLeave = () => {
      mouse.current.x = 0;
      mouse.current.y = 0;
    };
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

  const fbo = useRef(null);

  return (
    <>
      <Leva collapsed />
      <Canvas
        className="canvas-scene"
        gl={{ toneMapping: THREE.NeutralToneMapping }}
      >
        <Stats />
        <CameraControls />
        <SceneRenderer
          mode={mode}
          mouse={mouse}
          transformA={transformA}
          transformB={transformB}
          onFBO={(t) => {
            fbo.current = t;
          }}
        />

        <EffectComposer>
          {/* <Noise /> */}
          {/* <Vignette /> */}

          <CircularTransition u1={fbo.current} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default Experience;
