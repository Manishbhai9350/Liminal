import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from "leva";

type GLTFResult = {
  nodes: {
    Object_6: THREE.SkinnedMesh
    Object_7: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    Material_357: THREE.MeshPhysicalMaterial
    Material_349: THREE.MeshStandardMaterial
  }
}

export function Hand2(props: React.ComponentProps<'group'>) {
  const group = useRef<THREE.Group>(null)
  const { nodes } = useGLTF('/models/The Hand 3D Model.glb') as unknown as GLTFResult

  const {
    color,
    metalness,
    roughness,
    clearcoat,
    clearcoatRoughness,
    reflectivity,
    envMapIntensity,
    specularIntensity,
    specularColor,
    sheen,
    sheenColor,
    attenuationColor,
    attenuationDistance,
  } = useControls("Hand2 Material", {
    color: { value: "#cc0a0a" },               
    metalness: { value: 0.76, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.70, min: 0, max: 1, step: 0.01 }, 
    clearcoat: { value: 1.0, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    reflectivity: { value: 1.0, min: 0, max: 1, step: 0.01 },
    envMapIntensity: { value: 2.2, min: 0, max: 10, step: 0.1 },
    specularIntensity: { value: 1.2, min: 0, max: 5, step: 0.01 },
    specularColor: { value: "#ff9999" },         
    sheen: { value: 0.4, min: 0, max: 1, step: 0.01 },
    sheenColor: { value: "#8b0000" },            
    attenuationColor: { value: "#5a0000" },
    attenuationDistance: { value: 2, min: 0, max: 10, step: 0.01 },
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="b760f5edbef04eacb67c05f90ae95fb8fbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />

                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    skeleton={nodes.Object_6.skeleton}
                    castShadow
                    receiveShadow
                  >
                    <meshPhysicalMaterial
                      color={color}
                      metalness={metalness}
                      roughness={roughness}
                      clearcoat={clearcoat}
                      clearcoatRoughness={clearcoatRoughness}
                      reflectivity={reflectivity}
                      envMapIntensity={envMapIntensity}
                      specularIntensity={specularIntensity}
                      specularColor={specularColor}
                      sheen={sheen}
                      sheenColor={sheenColor}
                      attenuationColor={attenuationColor}
                      attenuationDistance={attenuationDistance}
                    />
                  </skinnedMesh>

                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  >
                    <meshPhysicalMaterial
                      color={color}
                      metalness={metalness}
                      roughness={roughness}
                      clearcoat={clearcoat}
                      clearcoatRoughness={clearcoatRoughness}
                      reflectivity={reflectivity}
                      envMapIntensity={envMapIntensity}
                      specularIntensity={specularIntensity}
                      specularColor={specularColor}
                      sheen={sheen}
                      sheenColor={sheenColor}
                      attenuationColor={attenuationColor}
                      attenuationDistance={attenuationDistance}
                    />
                  </skinnedMesh>

                  <group name="SK_Gauntlet" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/The Hand 3D Model.glb')