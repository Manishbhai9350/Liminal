import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import type { Texture } from "three";
import { ShaderMaterial, Vector2 } from "three/webgpu";
import {
  fragmentShader,
  fragmentShader1,
  vertexShader,
} from "./shaders/shader";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";

interface TransitionProps {
  bg1: Texture<unknown>;
  bg2: Texture<unknown>;
}

const TMat = shaderMaterial(
  {
    iTime: 0,
    iResolution: new Vector2(innerWidth, innerHeight),
    iChannel0: null,
    iChannel1: null,
  },
  vertexShader,
  fragmentShader1,
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
      max: 1,
      step: 0.001,
    },
  });

  // set textures once
  useEffect(() => {
    if (!ref.current) return;

    ref.current.iChannel0 = bg1;
    ref.current.iChannel1 = bg2;
  }, [bg1, bg2]);

  // update every frame
  useFrame((state) => {
    if (!ref.current) return;

    ref.current.iTime = state.clock.getElapsedTime();

    ref.current.iResolution.set(size.width, size.height);

    // 🔥 optional: drive something later
    ref.current.progress = progress;
  });

  return <tMat ref={ref} />;
};

export default TransitionMaterial;
