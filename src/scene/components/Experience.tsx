import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Stats } from "@react-three/drei";
import * as THREE from "three";
import { Leva, useControls } from "leva";
import HandScene from "./scene";

const Experience = () => {
  const {
    // Model 1
    posX,
    posY,
    posZ,
    scale,
    rotX,
    rotY,
    rotZ,
    ColorA,
    ColorB,

    // Model 2
    posX2,
    posY2,
    posZ2,
    scale2,
    rotX2,
    rotY2,
    rotZ2,
  } = useControls("Scene Controls", {
    // 🔵 Model 1
    posX: { value: -2.7, min: -10, max: 10, step: 0.1 },
    posY: { value: -12, min: -15, max: 10, step: 0.1 },
    posZ: { value: -10, min: -10, max: 10, step: 0.1 },
    scale: { value: 0.7, min: 0.1, max: 5, step: 0.01 },
    rotX: { value: 0.25, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rotY: { value: 4.55, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    rotZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },

    ColorA: "#1C47DB",
    ColorB: "#DB1C1C",

    // 🔴 Model 2
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
  });
  return (
    <>
      <Leva collapsed />
      <Canvas
        className="canvas-scene"
        // shadows
        gl={{
          toneMapping: THREE.NeutralToneMapping,
        }}
      >
        <Stats />
        {/* <Gradient /> */}
        {/* {lights} */}
        <Environment files="/neutral_HDR.jpg" background={false} />
        <CameraControls makeDefault />
        <HandScene
          variant="hand1"
          scale={scale}
          position={[posX, posY, posZ]}
          rotation={[rotX, rotY, rotZ]}
          color={ColorA}
        />

        {/* <HandScene
          variant="hand2"
          scale={scale2}
          position={[posX2, posY2, posZ2]}
          rotation={[rotX2, rotY2, rotZ2]}
          color={ColorB}
        /> */}
      </Canvas>
    </>
  );
};

export default Experience;
