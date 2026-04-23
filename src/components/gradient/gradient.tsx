import * as THREE from 'three';
import { extend, useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { SceneBounds } from "../../utils/three.utils";
import { shaderMaterial, useTexture } from "@react-three/drei";
import GradientVertex from './shaders/vertex.glsl';
import GradientFragment from './shaders/fragment.glsl';
import { useEffect, useRef } from 'react';
import { useControls } from 'leva';

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(0,0),
    uSpeed: 0,
    uScale: 1,
    uFreq: 1
  },
  GradientVertex,
  GradientFragment,
);

extend({ GradientMaterial })

const Gradient = () => {
  const MatRef = useRef();


  const { uFreq, uScale, uSpeed } = useControls({
    uSpeed:{
      value:1,
      min:0,
      max:100,
      step:.01
    },
    uFreq:{
      value:10,
      min:0,
      max:100
    },
    uScale:{
      value:1,
      min:0,
      max:100
    }
  })

  useEffect(() => {
    
    if(!MatRef.current) return;

    MatRef.current.uSpeed = uSpeed
    MatRef.current.uFreq = uFreq
    MatRef.current.uScale = uScale
  
    return () => {
      
    }
  }, [])
  

  const camera = useThree((v) => v.camera as PerspectiveCamera);

  const BG_Z = 20;

  const { width, height } = SceneBounds({
    aspect: innerWidth / innerHeight,
    distance: camera.position.z + BG_Z,
    fov: camera.fov,
  });

  const [bg] = useTexture(["/Design/bg.jpeg"]);
  bg.colorSpace = THREE.SRGBColorSpace;

  useFrame(({ clock }) => {
    if(!MatRef.current) return;

    MatRef.current.uTime = clock.getElapsedTime();
    
    
  })

  return <mesh>
    <planeGeometry args={[width,height]} />
    {/* <meshBasicMaterial color={'red'} /> */}
    <gradientMaterial ref={MatRef} />
  </mesh>;
};

export default Gradient;
