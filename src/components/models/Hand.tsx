import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshPhysicalMaterial;
  };
};

export function Hand(props: React.ComponentProps<"group">) {
  const { nodes } = useGLTF(
    "/models/Arm Hand Sculpting.glb",
  ) as unknown as GLTFResult;

  const {
    color,
    metalness,
    roughness,
    clearcoat,
    clearcoatRoughness,
    transmission,
    reflectivity,
    envMapIntensity,
    specularIntensity,
    specularColor,
    sheenColor,
    sheen,
    attenuationColor,
    attenuationDistance,
  } = useControls("Hand Material", {
    color: { value: "#1a3fd4" },
    metalness: { value: 0.95, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.05, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.03, min: 0, max: 1, step: 0.01 },
    transmission: { value: 0, min: 0, max: 1, step: 0.01 },
    reflectivity: { value: 1.0, min: 0, max: 1, step: 0.01 },
    envMapIntensity: { value: 2.5, min: 0, max: 10, step: 0.1 },
    specularIntensity: { value: 1.2, min: 0, max: 5, step: 0.01 },
    specularColor: { value: "#aaccff" },
    sheenColor: { value: "#0022cc" },
    sheen: { value: 0.6, min: 0, max: 1, step: 0.01 },
    attenuationColor: { value: "#000a7a" },
    attenuationDistance: { value: 2, min: 0, max: 10, step: 0.01 },
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {["Object_2", "Object_3", "Object_4"].map((obj) => (
          <mesh
            key={obj}
            castShadow
            receiveShadow
            geometry={nodes[obj].geometry}
          >
            <meshPhysicalMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
              clearcoat={clearcoat}
              clearcoatRoughness={clearcoatRoughness}
              transmission={transmission}
              reflectivity={reflectivity}
              envMapIntensity={envMapIntensity}
              specularIntensity={specularIntensity}
              specularColor={specularColor}
              sheenColor={sheenColor}
              sheen={sheen}
              attenuationColor={attenuationColor}
              attenuationDistance={attenuationDistance}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/models/Arm Hand Sculpting.glb");
