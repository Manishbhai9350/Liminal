import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Scene from "../scene";

const Experience = () => {
  return (
    <Canvas
      className="canvas-scene"
      shadows
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.4,
      }}
    >
      <OrbitControls enableDamping />

      <Environment preset="city" background={false} />

      <ambientLight intensity={0.08} color={"#0a1a40"} />

      <directionalLight
        castShadow
        position={[0, 18, 2]}
        intensity={6}
        color={"#00e5ff"}
        shadow-mapSize={[2048, 2048]}
      />

      <directionalLight position={[2, 8, 6]} intensity={3} color={"#4477ff"} />

      <directionalLight
        position={[-8, 4, -2]}
        intensity={4}
        color={"#0033ff"}
      />

      <pointLight position={[0, 5, -8]} intensity={30} color={"#0055ff"} />

      <Scene />
    </Canvas>
  );
};

export default Experience;
