import "./transition.css";
import { Canvas } from "@react-three/fiber";
import TransitionScene from "./components/scene";
import { WebGPURenderer } from "three/webgpu";

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
        <TransitionScene />
      </Canvas>
    </div>
  );
};

export default TransitionPage;
