import * as THREE from 'three';
import { extend, useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { SceneBounds } from "../../utils/three.utils";
import { OrbitControls, shaderMaterial, useTexture } from "@react-three/drei";
import GradientVertex from './shaders/vertex.glsl';
import GradientFragment from './shaders/fragment.glsl';
import { useEffect, useRef } from 'react';
import { useControls } from 'leva';

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(0,0),
    uSpeed: 2,
    uScale: 1,
    uContrast: 2,
    uFreq: 1,
    uAmp: .1,
    uCurveOff: .1,
    uMouse: new THREE.Vector2(0,0) // 👈 NEW
  },
  GradientVertex,
  GradientFragment,
);
extend({ GradientMaterial })

const Gradient = () => {
  const MatRef = useRef();

  const mouse = useThree((state) => state.mouse);


  const { uFreq, uScale, uSpeed,uContrast, uCurveAmp, uCurveOff  } = useControls({
    uCurveAmp: {
      value:.1,
      min:0,
      max:.5,
      step:.001
    },
    uCurveOff:{
      value:.1,
      min:.1,
      max:.5,
      step:.001
    },
    uSpeed:{
      value:2,
      min:0,
      max:100,
      step:.01
    },
    uFreq:{
      value:6,
      min:0,
      max:100
    },
    uScale:{
      value:2,
      min:0,
      max:100
    },
    uContrast:{
      value:.8,
      min:0,
      max:10
    }
  })

  useEffect(() => {
    
    if(!MatRef.current) return;

    MatRef.current.uSpeed = uSpeed
    MatRef.current.uFreq = uFreq
    MatRef.current.uScale = uScale
    MatRef.current.uContrast = uContrast
    MatRef.current.uCurveAmp = uCurveAmp
    MatRef.current.uCurveOff = uCurveOff
  
    return () => {
      
    }
  }, [uSpeed,uFreq,uScale,uContrast,uCurveAmp,uCurveOff])
  

  const camera = useThree((v) => v.camera as PerspectiveCamera);

  const BG_Z = 20;

  const { width, height } = SceneBounds({
    aspect: innerWidth / innerHeight,
    distance: camera.position.z + BG_Z,
    fov: camera.fov,
  });

  const [bg] = useTexture(["/Design/bg.jpeg"]);
  bg.colorSpace = THREE.SRGBColorSpace;

 const Mouse = useThree((state) => state.mouse);

useFrame(({ clock }) => {
  if (!MatRef.current) return;

  MatRef.current.uTime = clock.getElapsedTime();

  // pass normalized mouse
  MatRef.current.uMouse.set(Mouse.x, Mouse.y);
});

  return <>
  <OrbitControls makeDefault />
    <mesh position={[0,0,-BG_Z]}>
      <planeGeometry args={[width,height]} />
      {/* <meshNormalMaterial /> */}
      <gradientMaterial ref={MatRef} />
    </mesh>
  </>
};

export default Gradient;
