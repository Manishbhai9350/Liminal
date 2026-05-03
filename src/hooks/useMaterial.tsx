import * as THREE from "three";
import { useEffect } from "react";
import { useControls } from "leva";

export function useMaterial(
  scene: THREE.Object3D
) {
  const { color, metalness, roughness, maxRotation } = useControls(
    "Hand Controls",
    {
      color: "#0029ff",
      metalness: { value: 0.88, min: 0, max: 1 },
      roughness: { value: 0.5, min: 0, max: 1 },
      maxRotation: { value: 0.3, min: 0, max: 2 },
    },
  );

  useEffect(() => {
    scene.traverse((node: any) => {
      if (node.isMesh && node.material) {
        node.material.color.set(color);
        node.material.metalness = metalness;
        node.material.roughness = roughness;
      }
    });
  }, [scene, color, metalness, roughness]);

  return { maxRotation }
}
