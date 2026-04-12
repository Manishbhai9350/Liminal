import { Canvas } from '@react-three/fiber'
import React from 'react'
import Background from './components/background'

const Scene = () => {
  return (
    <Canvas className='canvas-scene'>
        <mesh>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
        <Background />
    </Canvas>
  )
}

export default Scene