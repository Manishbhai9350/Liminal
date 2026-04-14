import { Hand } from "../components/models/Hand";
import { Hand2 } from "../components/models/Hand2";

const Scene = () => {
  return (
    <>
      <Hand
        scale={1.4}
        position={[0, -8, 0]}
        rotation-x={-Math.PI - 0.6}
        rotation-y={Math.PI / 2 + 0.3}
      />
      {/* <Hand2
        scale={3.5}
        position={[0,0.5, 0]}
        rotation-x={Math.PI /2}
        rotation-y={Math.PI / 2}
      /> */}
    </>
  );
};

export default Scene;
