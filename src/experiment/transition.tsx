import "./transition.css";
import { Canvas } from "@react-three/fiber";
import TransitionScene from "./components/scene";
import { WebGPURenderer } from "three/webgpu";
import { CameraControls, OrbitControls } from "@react-three/drei";

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
