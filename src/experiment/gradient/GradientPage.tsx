import { Canvas } from "@react-three/fiber";
import Graniet from "../../components/gradient/graniet";

const GradientPage = () => {
  return (
    <div className="gradient-page">
      <Canvas
        // gl={async (props) => {
        //   const renderer = new WebGPURenderer(props);
        //   await renderer.init(); // ⚠️ REQUIRED for WebGPU
        //   return renderer;
        // }}
      >
        {/* <OrbitControls makeDefault /> */}
        <Graniet colorA={"#aaabae"} colorB={"lightpink"} colorC={"gray"} />
      </Canvas>
    </div>
  );
};

export default GradientPage;
