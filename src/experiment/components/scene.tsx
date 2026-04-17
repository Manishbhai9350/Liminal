import { useBounds, useCubeTexture, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { SRGBColorSpace } from "three";
import TransitionMaterial from "./transition.material";
import { useEffect, useMemo } from "react";
import { MeshBasicNodeMaterial } from "three/webgpu";
import {
  float,
  Fn,
  length,
  mix,
  PI,
  pow,
  sin,
  smoothstep,
  step,
  texture,
  uniform,
  uv,
  vec4,
} from "three/tsl";
import { useControls } from "leva";

const TransitionScene = () => {
  const { width, height } = useThree((v) => v.viewport);

  const { progress } = useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.001,
    },
  });

  // const [bg1, bg2] = useTexture(["Design/bg2.jpeg", "Design/bg.jpeg"]);
  const [bg1, bg2] = useTexture(["Design/8bita.png", "Design/8bitb.png"]);
  // const [bg1, bg2] = useCubeTexture(["Design/bg2.jpeg", "Design/bg.jpeg"], {
  //   path: "Design/",
  // });
  bg1.colorSpace = bg2.colorSpace = SRGBColorSpace;

  const ProgressUn = useMemo(() => uniform(0), []);

  useEffect(() => {
    ProgressUn.value = progress;
  }, [progress]);

  const NodeMat = useMemo(() => {
    const mat = new MeshBasicNodeMaterial();
    mat.colorNode = Fn(() => {

      const BG1 = texture(bg1,uv());
      const BG2 = texture(bg2,uv());
      const prog = ProgressUn;

      const cnUV = uv().sub(0.5).mul(2);
      const ln = length(cnUV).div(Math.sqrt(2));

      const radius = prog.mul(1.5);
      const thickness = float(0.2);

      const inner = radius.sub(thickness);
      const outer = radius;

      // 🔥 gradient from inner → outer
      const t = ln.sub(inner).div(outer.sub(inner)).clamp(0, 1);

      // 🔥 strict ring mask (only band survives)
      const mask = step(inner, ln).mul(float(1).sub(step(outer, ln)));

      const ring = t;


      const color = mix(BG1,BG2,ring);

      return color;
    })();

    return mat;
  }, [bg1, bg2, ProgressUn]);

  return (
    <mesh /* material={NodeMat} */>
      <planeGeometry args={[width, height]} />
      <TransitionMaterial bg1={bg1} bg2={bg2} />
      {/* <meshBasicMaterial map={bg1} /> */}
    </mesh>
  );
};

// useCubeTexture.preload(["bg2.jpeg", "bg.jpeg"], { path: "Design/" });
useTexture.preload(["Design/bg2.jpeg", "Design/bg.jpeg"]);

export default TransitionScene;
