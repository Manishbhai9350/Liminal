import "./transition.css";
import { Canvas } from "@react-three/fiber";

const TransitionPage = () => {
  return (
    <div className="transition-page">
      <Canvas
        // gl={async (props) => {
        //   const renderer = new WebGPURenderer(props);
        //   await renderer.init(); // ⚠️ REQUIRED for WebGPU
        //   return renderer;
        // }}
      >
        {/* <OrbitControls makeDefault /> */}
        <TransitionScene />
      </Canvas>
    </div>
  );
};

export default TransitionPage;
