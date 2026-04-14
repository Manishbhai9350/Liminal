import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import UI from "./components/ui";
  import Experience from './scene/Experience'
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const App = () => {
  return (
    <>
    <div className="bg">
      
    </div>
      <ReactLenis root />
      <main className="app">
        <UI />
        <div className="canvas w-full h-screen">
        <Experience/>
        </div>
      </main>
    </>
  );
};

export default App;
