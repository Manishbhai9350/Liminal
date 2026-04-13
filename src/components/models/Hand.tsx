import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

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
              color={"#1a3fd4"}
              metalness={0.95}
              roughness={0.05}
              clearcoat={1}
              clearcoatRoughness={0.03}
              transmission={0}
              reflectivity={1.0}
              envMapIntensity={2.5}
              specularIntensity={1.2}
              specularColor={"#aaccff"}
              sheenColor={"#0022cc"}
              sheen={0.6}
              attenuationColor={"#000a7a"}
              attenuationDistance={2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/models/Arm Hand Sculpting.glb");
