import { Canvas } from "@react-three/fiber";
import { Environment, Stats } from "@react-three/drei";
import * as THREE from "three";
import { Leva, useControls, folder } from "leva";
import Transition from "./Transition";
import { Scene1, Scene2 } from "./scene";

const Experience = () => {
  const {
    ambientIntensity,
    ambientColor,
    dir1Intensity,
    dir1Color,
    dir1PosX,
    dir1PosY,
    dir1PosZ,
    dir2Intensity,
    dir2Color,
    dir2PosX,
    dir2PosY,
    dir2PosZ,
    dir3Intensity,
    dir3Color,
    dir3PosX,
    dir3PosY,
    dir3PosZ,
    pointIntensity,
    pointColor,
    pointPosX,
    pointPosY,
    pointPosZ,
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
  } = useControls("Scene Controls", {
    "Ambient light": folder({
      ambientIntensity: { value: 0.08, min: 0, max: 3, step: 0.01 },
      ambientColor: { value: "#0a1a40" },
    }),
    "Directional Light 1": folder({
      dir1Intensity: { value: 12.8, min: 0, max: 15, step: 0.1 },
      dir1Color: { value: "#0033ff" },
      dir1PosX: { value: 0, min: -20, max: 20, step: 0.1 },
      dir1PosY: { value: 18, min: 0, max: 30, step: 0.1 },
      dir1PosZ: { value: 2, min: -20, max: 20, step: 0.1 },
    }),
    "Directional Light 2": folder({
      dir2Intensity: { value: 6.7, min: 0, max: 10, step: 0.1 },
      dir2Color: { value: "#17399d" },
      dir2PosX: { value: 2, min: -20, max: 20, step: 0.1 },
      dir2PosY: { value: 8, min: 0, max: 30, step: 0.1 },
      dir2PosZ: { value: 6, min: -20, max: 20, step: 0.1 },
    }),
    "Directional Light 3": folder({
      dir3Intensity: { value: 1, min: 0, max: 10, step: 0.1 },
      dir3Color: { value: "#0027c4" },
      dir3PosX: { value: -8, min: -20, max: 20, step: 0.1 },
      dir3PosY: { value: 4, min: 0, max: 30, step: 0.1 },
      dir3PosZ: { value: -2, min: -20, max: 20, step: 0.1 },
    }),
    "Point Light": folder({
      pointIntensity: { value: 0, min: 0, max: 100, step: 1 },
      pointColor: { value: "#0e48e2" },
      pointPosX: { value: 0, min: -20, max: 20, step: 0.1 },
      pointPosY: { value: 5, min: 0, max: 30, step: 0.1 },
      pointPosZ: { value: -8, min: -20, max: 20, step: 0.1 },
    }),
    "Model-1": folder({
      posX: { value: -2.7, min: -10, max: 10, step: 0.1 },
      posY: { value: -12, min: -15, max: 10, step: 0.1 },
      posZ: { value: -10, min: -10, max: 10, step: 0.1 },
      scale: { value: 0.7, min: 0.1, max: 5, step: 0.01 },
      rotX: {
        value: 0.25,
        min: -Math.PI * 2,
        max: Math.PI * 2,
        step: 0.01,
      },
      rotY: {
        value: 4.55,
        min: -Math.PI * 2,
        max: Math.PI * 2,
        step: 0.01,
      },
      rotZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    }),
    "Model-2": folder({
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
    }),
  });

  const ibl = (
    <Environment preset="city" environmentIntensity={1} background={false} />
  );

  const lights = (
    <>
      <ambientLight intensity={ambientIntensity} color={ambientColor} />

      <directionalLight
        castShadow
        position={[dir1PosX, dir1PosY, dir1PosZ]}
        intensity={dir1Intensity}
        color={dir1Color}
        shadow-mapSize={[2048, 2048]}
      />

      <directionalLight
        position={[dir2PosX, dir2PosY, dir2PosZ]}
        intensity={dir2Intensity}
        color={dir2Color}
      />

      <directionalLight
        position={[dir3PosX, dir3PosY, dir3PosZ]}
        intensity={dir3Intensity}
        color={dir3Color}
      />

      <pointLight
        position={[pointPosX, pointPosY, pointPosZ]}
        intensity={pointIntensity}
        color={pointColor}
      />
    </>
  );

  return (
    <>
      <Leva collapsed />
      <Canvas
        className="canvas-scene"
        // shadows
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
      >
        <Stats />
        {lights}
        <Scene1
          scale={scale}
          position={[posX as number, posY as number, posZ as number]}
          rotation={[rotX, rotY, rotZ]}
        />
        {/* <Scene2
          scale={scale2}
          position={[posX2 as number, posY2 as number, posZ2 as number]}
          rotation={[rotX2, rotY2, rotZ2]}
        /> */}
      </Canvas>
    </>
  );
};

export default Experience;
