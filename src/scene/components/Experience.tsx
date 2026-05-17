import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBO, Stats } from "@react-three/drei";
import * as THREE from "three";
import { Leva, useControls } from "leva";
import { useEffect, useMemo, useRef, useState } from "react";

import HandScene from "./scene";
import SceneEnv from "../../components/env/environment";
import { EffectComposer } from "@react-three/postprocessing";
import { CircularTransition } from "../../components/postprocessing/effects/CircularTransition";
import Snapshot from "../../components/snapshot";
import { useScroll } from "../../components/scroll/useScroll";

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

const FBOCapture = ({ sceneARef, sceneBRef, mode, onFBO }: FBOCaptureProps) => {
  const { gl, scene, camera, size } = useThree();

  const fboSize = useMemo(() => {
    const w = Math.min(size.width, 1024);
    const h = (w * size.height) / size.width;
    return { w, h };
  }, [size]);

  const fbo = useFBO(fboSize.w, fboSize.h, { samples: 4 });

  const isTransitioning = useMemo(
    () => mode === "TransitionToB" || mode === "TransitionToA",
    [mode],
  );

  useFrame(() => {
    if(mode == 'A') return;
    const groupA = sceneARef.current;
    const groupB = sceneBRef.current;
    if (!groupA || !groupB) return;

    // Always capture Scene B into FBO
    groupA.visible = false;
    groupB.visible = true;

    gl.setRenderTarget(fbo);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Restore — Scene A always renders to screen by default
    groupA.visible = true;
    groupB.visible = false;

    onFBO(fbo.texture);
  }, -1);

  // useFrame(() => {
  //   const groupA = sceneARef.current;
  //   const groupB = sceneBRef.current;
  //   if (!groupA || !groupB) return;

  //   if (!isTransitioning) {
  //     // Simple visibility swap — no FBO render needed
  //     groupA.visible = mode === "A";
  //     groupB.visible = mode === "B";
  //     return; // ← skip FBO work entirely
  //   }

  //   // Determine which scene goes into FBO (the "incoming" scene)
  //   const incomingIsB = mode === "TransitionToB";

  //   groupA.visible = !incomingIsB;
  //   groupB.visible = incomingIsB;

  //   // Render incoming scene into FBO
  //   gl.setRenderTarget(fbo);
  //   gl.clear(); // clears color + depth + stencil
  //   gl.render(scene, camera);
  //   gl.setRenderTarget(null);

  //   // Restore — outgoing scene stays visible for the default R3F render pass
  //   groupA.visible = incomingIsB;
  //   groupB.visible = !incomingIsB;

  //   onFBO(fbo.texture);
  // }, -1); // ← negative priority = runs BEFORE R3F's default render

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

  const initVisibleA = useMemo(() => mode == "A", []);
  const initVisibleB = useMemo(() => mode == "B", []);

  return (
    <>
      {/* <group ref={tempRef}>
        <TempMesh />
      </group> */}

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
  const h = (w * height) / width;

  return (
    <mesh position={[-(width - w) / 2, -(height - h) / 2, 0]} ref={meshRef}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial />
    </mesh>
  );
};

const Experience = ({ mode = "A" }: ExperienceProps) => {
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

  const fbo = useRef<THREE.Texture | null>(null);

  const isTransitioning = useMemo(
    () => mode == "TransitionToA" || mode == "TransitionToB",
    [mode],
  );

  return (
    <>
      <Leva hidden collapsed />
      <Canvas
        dpr={[1, 1.5]}
        // gl={{ preserveDrawingBuffer: true }}
        className="canvas-scene"
        // gl={async (props) => {
        //   console.warn("WebGPU is supported");
        //   const renderer = new WebGPURenderer(
        //     props as WebGPURendererParameters,
        //   );
        //   await renderer.init();
        //   return renderer;
        // }}
      >
        {/* For Taking Snapshot */}
        <Snapshot />
        <Stats />
        {/* <CameraControls /> */}
        <SceneRenderer
          mode={mode}
          mouse={mouse}
          transformA={transformA}
          transformB={transformB}
          onFBO={(t: THREE.Texture) => {
            fbo.current = t;
          }}
        />

        {/* <Arm1 /> */}
        {/* <Graniet colorA={"#aaabae"} colorB={"lightpink"} colorC={"gray"} /> */}

        {/* <SceneEnv background /> */}

        {/* <mesh rotation={[.5,.77,.1]} >
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial />
        </mesh> */}

        {/* {isTransitioning && (
          <EffectComposer>
            <CircularTransition fbo={fbo} progress={0.5} />
          </EffectComposer>
        )} */}
        <EffectComposer  >
          <CircularTransition fbo={fbo} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default Experience;
