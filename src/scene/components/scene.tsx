import { useMemo } from "react";
import Graniet from "../../components/gradient/graniet";
import { Arm1, Arm2, Hand1, Hand2 } from "../../components/hands/hands";

type HandSceneProps = {
  variant: "arm1" | "arm2" | "hand1" | "hand2";
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
};

const HandScene = ({
  mouse,
  variant,
  scale,
  position,
  rotation,
  color,
}: HandSceneProps) => {
  const Hand = useMemo(() => {
    if (variant == "arm1") return <Arm1 mouse={mouse} />;
    if (variant == "arm2") return <Arm2 mouse={mouse} />;
    if (variant == "hand1") return <Hand1 mouse={mouse} />;
    if (variant == "hand2") return <Hand2 mouse={mouse} />;
    return null;
  }, [variant]);

  return (
    <>
      {/* Shared gradient background */}
      {/* <Gradient colorA={color} colorB="#000000" /> */}
      <Graniet />

      {/* Shared transform */}
      <group scale={scale} position={position} rotation={rotation}>
        {Hand}
      </group>
    </>
  );
};

export default HandScene;
