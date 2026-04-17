import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import type { Texture } from "three";
import { ShaderMaterial, Vector2, Vector3 } from "three/webgpu";
import {
  fragmentShader,
  fragmentShader1,
  vertexShader,
  TransitionVertex,
  TransitionFragment,
} from "./shaders/shader";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";

interface TransitionProps {
  bg1: Texture<unknown>;
  bg2: Texture<unknown>;
}

const TMat = shaderMaterial(
  {
    // textures
    tScene1: null,
    tScene2: null,
    tSection: null,
    tTechNoise: null,
    uResolution: new Vector2(),
    uMask: new Vector3(),
    uProgress: 0,
    uProgressVel: 0,
    uSectionProgress: 0,
    uWaveSize: 2,
    uMaskRadius: 0.18,
    uInnerDistortion: -1.4,
    uRadius: 0,
    uWaveGlow: 10,
    uTime: 0,
  },
  TransitionVertex,
  TransitionFragment,
);

extend({ TMat });

// const TransitionMaterial = ({
//   bg1,
//   bg2,
// }: TransitionProps): MeshBasicNodeMaterial => {
//   const { progress } = useControls({
//     progress: {
//       value: 0,
//       min: 0,
//       max: 1,
//       step: 0.001,
//     },
//   });

//   const material = useMemo(() => {
//     const mat = new MeshBasicNodeMaterial();

//     mat.colorNode = Fn(() => {
//       const T1 = texture(bg1, uv());
//       const T2 = texture(bg2, uv());

//       return T1;
//     })(); // 🔴 red

//     return mat;
//   }, []);
//   return material;
// };

const TransitionMaterial = ({ bg1, bg2 }: TransitionProps) => {
  const ref = useRef<any>();
  const { size } = useThree();

  const { progress } = useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1.2,
      step: 0.001,
    },
  });

  // set textures once
  useEffect(() => {
    if (!ref.current) return;

    ref.current.tScene1 = bg1;
    ref.current.tScene2 = bg2;

    // optional (can be same as bg1 for now)
    ref.current.tSection = bg2;
    ref.current.tTechNoise = bg1; // better if you load a noise texture later
  }, [bg1, bg2]);

  // update every frame
  useFrame((state) => {
    if (!ref.current) return;

    ref.current.uTime = state.clock.getElapsedTime();
    // let n = e.getPixelRatio(),
    //             i = window.innerWidth * n,
    //             a = window.innerHeight * n;

    ref.current.uResolution.set(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);

    ref.current.uProgress = progress;

    // optional animations
    ref.current.uWaveSize = 1.0;
    ref.current.uInnerDistortion = 0.5;
    ref.current.uWaveGlow = 0.3;
  });

  return <tMat ref={ref} />;
};

export default TransitionMaterial;
