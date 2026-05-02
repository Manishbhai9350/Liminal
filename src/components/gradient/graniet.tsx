import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { SceneBounds } from "../../utils/three.utils";
import { shaderMaterial, useTexture } from "@react-three/drei";
import GradientVertex from "./shaders/vertex.glsl";
import GranietFragment from "./shaders/graniet.glsl";
import { useEffect, useRef } from "react";
import { useControls } from "leva";

const GranietMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(0, 0),

    uTimeSpeed: 1,
    uColorBalance: 0.0,

    uWarpStrength: 0,
    uWarpFrequency: 5.0,
    uWarpSpeed: 2.0,
    uWarpAmplitude: 50.0,

    uBlendAngle: 0.0,
    uBlendSoftness: 0.4,

    uRotationAmount: 1000.0,

    uNoiseScale: 3.0,

    uGrainAmount: 0,
    uGrainScale: 2.0,
    uGrainAnimated: 0.0, // ⚠️ float, not boolean

    uContrast: 1.17 /* 3.0 */ ,
    uGamma: 1.3,
    uSaturation: .78 /* .3 */,

    uCenterOffset: new THREE.Vector2(0, 0),
    uZoom: 0.9,

    uColor1: new THREE.Color("#00b5f2"),
    uColor2: new THREE.Color("#2800c7"),
    uColor3: new THREE.Color("#000000"),
  },
  GradientVertex,
  GranietFragment,
);
extend({ GranietMaterial });

const Graniet = ({ colorA, colorB }: { colorA: string; colorB: string }) => {
  const MatRef = useRef();

  const mouse = useThree((state) => state.mouse);

  const controls = useControls("Graniet Controlrs", {
    timeSpeed: { value: .4, min: 0, max: 5, step: 0.01 },
    colorBalance: { value: 0.0, min: -1, max: 1, step: 0.01 },

    warpStrength: { value: 1.0, min: 0, max: 10, step: 0.01 },
    warpFrequency: { value: 5.0, min: 0, max: 20, step: 0.1 },
    warpSpeed: { value: 2.0, min: 0, max: 10, step: 0.01 },
    warpAmplitude: { value: 50.0, min: 0, max: 200, step: 1 },

    blendAngle: { value: 0.0, min: 0, max: Math.PI * 2, step: 0.01 },
    blendSoftness: { value: 0.05, min: 0, max: 1, step: 0.01 },

    rotationAmount: { value: 500.0, min: 0, max: 1000, step: 1 },

    noiseScale: { value: 2.0, min: 0, max: 10, step: 0.1 },

    grainAmount: { value: .1, min: 0, max: 1, step: 0.01 },
    grainScale: { value: 2.0, min: 0, max: 10, step: 0.1 },
    grainAnimated: false,

    contrast: { value: 1.5, min: 0, max: 3, step: 0.01 },
    gamma: { value: 1.0, min: 0, max: 3, step: 0.01 },
    saturation: { value: 1.0, min: 0, max: 3, step: 0.01 },

    centerX: { value: 0.0, min: -1, max: 1, step: 0.01 },
    centerY: { value: 0.0, min: -1, max: 1, step: 0.01 },
    zoom: { value: 0.9, min: 0.1, max: 3, step: 0.01 },

    color1: "#000000",
    color2: "#2800c7",
    color3: "#00b5f2",
  });

  useFrame((state) => {
    if (!MatRef.current) return;

    const mat = MatRef.current;

    mat.iTime = state.clock.elapsedTime;

    mat.uTimeSpeed = controls.timeSpeed;
    mat.uColorBalance = controls.colorBalance;

    mat.uWarpStrength = controls.warpStrength;
    mat.uWarpFrequency = controls.warpFrequency;
    mat.uWarpSpeed = controls.warpSpeed;
    mat.uWarpAmplitude = controls.warpAmplitude;

    mat.uBlendAngle = controls.blendAngle;
    mat.uBlendSoftness = controls.blendSoftness;

    mat.uRotationAmount = controls.rotationAmount;

    mat.uNoiseScale = controls.noiseScale;

    mat.uGrainAmount = controls.grainAmount;
    mat.uGrainScale = controls.grainScale;
    mat.uGrainAnimated = controls.grainAnimated ? 1.0 : 0.0;

    mat.uContrast = controls.contrast;
    mat.uGamma = controls.gamma;
    mat.uSaturation = controls.saturation;

    mat.uZoom = controls.zoom;

  });

  const camera = useThree((v) => v.camera as PerspectiveCamera);

  const BG_Z = 20;

  const { width, height } = SceneBounds({
    aspect: innerWidth / innerHeight,
    distance: camera.position.z + BG_Z,
    fov: camera.fov,
  });

  const [bg] = useTexture(["/Design/bg.jpeg"]);
  bg.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    if (!MatRef.current) return;

    const mat = MatRef.current;

    mat.iResolution.set(window.innerWidth, window.innerHeight);
    // mat.uCenterOffset.set(controls.centerX, controls.centerY);
    mat.uCenterOffset.set(0, 0);
    
    mat.uColor1.set(controls.color1);
    mat.uColor2.set(controls.color2);
    mat.uColor3.set(controls.color3);

    return () => {};
  }, [innerWidth, innerHeight, controls.color1,controls.color2,controls.color3]);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <mesh position={[0, 0, -BG_Z]}>
        <planeGeometry args={[width, height]} />
        {/* <meshNormalMaterial /> */}
        <granietMaterial ref={MatRef} />
      </mesh>
    </>
  );
};

export default Graniet;
