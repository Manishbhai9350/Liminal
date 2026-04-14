import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
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

const redChrome = {
  color:              "#cc0a0a",      // deep saturated red base
  metalness:          0.7,
  roughness:          0.2,           // near-mirror for the wet gloss
  clearcoat:          1.0,
  clearcoatRoughness: 0.04,
  reflectivity:       1.0,
  envMapIntensity:    2.2,
  specularIntensity:  1.2,
  specularColor:      "#ff9999",      // warm pinkish-white highlight
  sheen:              0.4,
  sheenColor:         "#8b0000",      // dark-red sheen for depth
  attenuationColor:   "#5a0000",
  attenuationDistance:2,
}

export function Hand2(props: React.ComponentProps<'group'>) {
  const group = useRef<THREE.Group>(null)
  const { nodes } = useGLTF('/models/The Hand 3D Model.glb') as unknown as GLTFResult

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

                  {/* Override both skinned meshes with red chrome */}
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    skeleton={nodes.Object_6.skeleton}
                    castShadow
                    receiveShadow
                  >
                    <meshPhysicalMaterial {...redChrome} />
                  </skinnedMesh>

                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  >
                    <meshPhysicalMaterial {...redChrome} />
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