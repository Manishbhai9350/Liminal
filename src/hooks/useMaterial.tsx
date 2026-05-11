import * as THREE from "three";
import { useEffect } from "react";
import { useControls } from "leva";

export function useMaterial(
  scene: THREE.Object3D,
  baseColor: string,
) {
  // const { color, metalness, roughness, maxRotation } = useControls(
  //   "Hand Controls",
  //   {
  //     color: baseColor,
  //     metalness: { value: 0.6, min: 0, max: 1 },
  //     roughness: { value: 0, min: 0, max: 1 },
  //     maxRotation: { value: 0.3, min: 0, max: 2 },
  //   },
  // );

  useEffect(() => {
    scene.traverse((node: any) => {
      if (node.isMesh && node.material) {
        node.material.color.set(baseColor);
        node.material.metalness = .6;
        node.material.roughness = 0;
        node.material.side = 2
      }
    });
  }, [scene, baseColor, /* color, metalness, roughness */]);

  return { maxRotation: .3 }
}
