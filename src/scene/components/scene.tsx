import { Hand } from "../../components/models/Hand";
import { Hand2 } from "../../components/models/Hand2";

export type SceneModelProps = {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

export const Scene1 = ({
  scale,
  position,
  rotation,
}: SceneModelProps) => (
  <Hand
    scale={scale}
    position={[position[0], position[1], position[2]]}
    rotation={[rotation[0], rotation[1], rotation[2]]}
  />
);

export const Scene2 = ({
  scale,
  position,
  rotation,
}: SceneModelProps) => (
  <Hand2
    scale={scale}
    position={[position[0], position[1], position[2]]}
    rotation={[rotation[0], rotation[1], rotation[2]]}
  />
);
