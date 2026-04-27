import Gradient from "../../components/gradient/gradient"
import { Hand } from "../../components/models/Hand"
import { Hand2 } from "../../components/models/Hand2"

type HandSceneProps = {
  variant: "hand1" | "hand2"
  scale: number
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
}

const HandScene = ({
  variant,
  scale,
  position,
  rotation,
  color,
}: HandSceneProps) => {
  return (
    <>
      {/* Shared gradient background */}
      <Gradient colorA={color} colorB="#000000" />

      {/* Shared transform */}
      <group scale={scale} position={position} rotation={rotation}>
        {variant === "hand1" ? <Hand /> : <Hand2 />}
      </group>
    </>
  );
};

export default HandScene;