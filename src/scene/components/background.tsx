import { useThree } from "@react-three/fiber";
import { SceneBounds } from "../../utils/three.utils";
import type { PerspectiveCamera } from "three";

interface BackgroundProps {
  colorA?: string;
  colorB?: string;
  seed?: number;
}

const Background = ({}: BackgroundProps) => {
  const POSITION_Z = 5;
  const camera = useThree((v) => v.camera as PerspectiveCamera);
  const { width, height } = SceneBounds({
    fov: camera.fov,
    distance: POSITION_Z + camera.position.z,
    aspect: camera.aspect,
  });
  return (
    <mesh position={[0, 0, -POSITION_Z]}>
      <planeGeometry args={[width, height]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Background;
