import { useMemo, type RefObject } from "react";
import Graniet from "../../components/gradient/graniet";
import { Arm1, Arm2, Hand1, Hand2 } from "../../components/hands/hands";

type HandSceneProps = {
  mouse: RefObject<{
    x: number;
    y: number;
}>;
  variant: string | "arm1" | "arm2" | "hand1" | "hand2";
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  colorA: string;
  colorB: string;
  colorC: string;
};

const HandScene = ({
  mouse,
  variant,
  scale,
  position,
  rotation,
  color,
  colorA,
  colorB,
  colorC
}: HandSceneProps) => {
  console.log(variant,color)
  const Hand = useMemo(() => {
    if (variant == "arm1") return <Arm1 color={color} mouse={mouse} />;
    if (variant == "arm2") return <Arm2 color={color} mouse={mouse} />;
    if (variant == "hand1") return <Hand1 color={color} mouse={mouse} />;
    if (variant == "hand2") return <Hand2 color={color} mouse={mouse} />;
    return null;
  }, [variant,color]);

  return (
    <>
      {/* Shared gradient background */}
      {/* <Gradient colorA={color} colorB="#000000" /> */}
      <Graniet offsetTime={ variant == 'arm1' ? 10 : 0 } colorA={colorA} colorB={colorB} colorC={colorC} />

      {/* Shared transform */}
      <group scale={scale} position={position} rotation={rotation}>
        {Hand}
      </group>
    </>
  );
};

export default HandScene;
