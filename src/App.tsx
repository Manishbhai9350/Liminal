import "lenis/dist/lenis.css";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import UI from "./components/ui";
import Scene from "./scene/scene";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const App = () => {
  return (
    <>
      <ReactLenis root />
      <main className="app">
        <UI />
        <Scene />
      </main>
    </>
  );
};

export default App;
