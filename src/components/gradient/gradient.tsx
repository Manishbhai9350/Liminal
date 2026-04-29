import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { SceneBounds } from "../../utils/three.utils";
import { OrbitControls, shaderMaterial, useTexture } from "@react-three/drei";
import GradientVertex from "./shaders/vertex.glsl";
import GradientFragment from "./shaders/fragment.glsl";
import { useEffect, useRef } from "react";
import { useControls } from "leva";

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(0, 0),
    uSpeed: 2,
    uScale: 1,
    uContrast: 2,
    uFreq: 1,
    uAmp: 0.1,
    uCurveOff: 0.1,
    uMouse: new THREE.Vector2(0, 0), // 👈 NEW
    uFractSoftness: 0.4,
    uFractStrength: 5,
    uFractStrips: 18,
    uColorA: null,
    uColorB: null,
    uPerlin: null,
    uBG: null,
  },
  GradientVertex,
  GradientFragment,
);
extend({ GradientMaterial });

const Gradient = ({ colorA, colorB }: { colorA: string; colorB: string }) => {
  const [perlinTexture,blueGrad] = useTexture(["/textures/perlin.png","/Design/bg.jpeg"]);
  perlinTexture.wrapS = perlinTexture.wrapT = THREE.RepeatWrapping;
  blueGrad.wrapS = blueGrad.wrapT = THREE.RepeatWrapping;

  const MatRef = useRef();

  const mouse = useThree((state) => state.mouse);

  const {
    uFreq,
    uScale,
    uSpeed,
    uContrast,
    uCurveAmp,
    uCurveOff,
    uFractSoftness,
    uFractStrength,
    uFractStrips,
  } = useControls({
    uCurveAmp: {
      value: 0.1,
      min: 0,
      max: 0.5,
      step: 0.001,
    },
    uCurveOff: {
      value: 0.1,
      min: 0.1,
      max: 0.5,
      step: 0.001,
    },
    uSpeed: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.0001,
    },
    uFreq: {
      value: 1,
      min: 0,
      max: 5,
      step:.001
    },
    uScale: {
      value: 2,
      min: 0,
      max: 100,
    },
    uContrast: {
      value: 0.8,
      min: 0,
      max: 10,
    },
    uFractStrength: {
      value: 5.0,
      min: 0,
      max: 10,
    },
    uFractStrips: {
      value: 17,
      min: 5,
      max: 100,
      step: 1,
    },
    uFractSoftness: {
      value: 0.4,
      min: 0.0,
      max: 1,
      step: 0.01,
    },
  });

  useEffect(() => {
    if (!MatRef.current) return;

    MatRef.current.uSpeed = uSpeed;
    MatRef.current.uFreq = uFreq;
    MatRef.current.uScale = uScale;
    MatRef.current.uContrast = uContrast;
    MatRef.current.uCurveAmp = uCurveAmp;
    MatRef.current.uCurveOff = uCurveOff;
    MatRef.current.uFractStrength = uFractStrength;
    MatRef.current.uFractSoftness = uFractSoftness;
    MatRef.current.uFractStrips = uFractStrips;
    MatRef.current.uColorA = new THREE.Color(colorA);
    MatRef.current.uColorB = new THREE.Color(colorB);
    MatRef.current.uPerlin = perlinTexture;
    MatRef.current.uBG = blueGrad;

    return () => {};
  }, [
    uSpeed,
    uFreq,
    uScale,
    uContrast,
    uCurveAmp,
    uCurveOff,
    uFractStrength,
    uFractSoftness,
    uFractStrips,
    colorA,
    colorB,
    perlinTexture,
    blueGrad
  ]);

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

  return (
    <>
      <OrbitControls makeDefault />
      <mesh position={[0, 0, -BG_Z]}>
        <planeGeometry args={[width, height]} />
        {/* <meshNormalMaterial /> */}
        <gradientMaterial ref={MatRef} />
      </mesh>
    </>
  );
};

export default Gradient;
