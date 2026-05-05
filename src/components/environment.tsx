import { Environment, useEnvironment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

const SceneEnv = ({ file = "/neutral_HDR.jpg", background = false }) => {
  const envMap = useEnvironment({ files: file });

  const baseRotation = useMemo(
    () => new THREE.Euler(Math.PI / 3.77, 0, 0),
    []
  );

  const [rotation, setRotation] = useState(baseRotation);

  const target = useRef(new THREE.Vector2());
  const current = useRef(new THREE.Vector2());

  useFrame((state) => {
    if (!envMap) return;

    target.current.set(state.mouse.x, state.mouse.y);
    current.current.lerp(target.current, 0.05);

    const rotX = baseRotation.x - current.current.y;
    const rotY = baseRotation.y - current.current.x;

    // ⚠️ create new Euler (important for React state)
    setRotation(new THREE.Euler(rotX, rotY, 0));
  });

  return (
    <Environment
      map={envMap}
      environmentRotation={rotation}
      background={background}
    />
  );
};

export default SceneEnv;