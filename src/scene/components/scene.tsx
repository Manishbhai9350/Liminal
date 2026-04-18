import { useThree } from "@react-three/fiber";
import { Hand } from "../../components/models/Hand";
import { Hand2 } from "../../components/models/Hand2";
import { SceneBounds } from "../../utils/three.utils";
import type { PerspectiveCamera } from "three";

export type SceneModelProps = {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

export const Scene1 = ({ scale, position, rotation }: SceneModelProps) => {
  const camera = useThree((v) => v.camera as PerspectiveCamera);

  const BG_Z = 20;

  const { width, height } = SceneBounds({
    aspect: innerWidth / innerHeight,
    distance: camera.position.z + BG_Z,
    fov: camera.fov
  })

  return (
    <>
      <mesh position={[0,0,-BG_Z]}>
        <planeGeometry args={[width,height]} />
        <meshBasicMaterial color={'red'} />
      </mesh>
      <Hand
        scale={scale}
        position={[position[0], position[1], position[2]]}
        rotation={[rotation[0], rotation[1], rotation[2]]}
      />
    </>
  );
};

export const Scene2 = ({ scale, position, rotation }: SceneModelProps) => (
  <Hand2
    scale={scale}
    position={[position[0], position[1], position[2]]}
    rotation={[rotation[0], rotation[1], rotation[2]]}
  />
);
