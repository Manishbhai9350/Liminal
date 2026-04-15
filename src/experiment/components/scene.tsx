import { useBounds, useCubeTexture, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { SRGBColorSpace } from "three";
import TransitionMaterial from "./transition.material";
import { useEffect } from "react";

const TransitionScene = () => {
  const { width, height } = useThree((v) => v.viewport);
  const [bg1, bg2] = useCubeTexture(["bg2.jpeg", "bg.jpeg"], {
    path: "Design/",
  });
  bg1.colorSpace = bg2.colorSpace = SRGBColorSpace;

  useEffect(() => {
    
    console.clear()
  
    return () => {
      
    }
  }, [])
  

  useEffect(() => {
    console.clear();
    console.log(bg1);
    console.log(bg2);

    return () => {};
  }, [bg1, bg2]);

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <TransitionMaterial bg1={bg1} bg2={bg2} />
      {/* <meshBasicMaterial map={bg1} /> */}
    </mesh>
  );
};

useCubeTexture.preload(["bg2.jpeg", "bg.jpeg"], { path: "Design/" });

export default TransitionScene;
