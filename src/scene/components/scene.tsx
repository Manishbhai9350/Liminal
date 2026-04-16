import { Hand } from "../../components/models/Hand";
import { Hand2 } from "../../components/models/Hand2";

const Scene = ({position,scale,rotation,position2,scale2,rotation2}) => {
  return (
    <>
      {/* <Hand
        scale={scale}
        position={[position[0],position[1], position[2]]}
        rotation={[rotation[0], rotation[1], rotation[2]]}
      /> */}
      <Hand2
        scale={scale2}
        position={[position2[0],position2[1], position2[2]]}
        rotation={[rotation2[0], rotation2[1], rotation2[2]]}
      />
    </>
  );
};

export default Scene;
