import "lenis/dist/lenis.css";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import UI from "./components/ui";
  import Experience from './scene/components/Experience'
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const App = () => {
  return (
    <>
      <ReactLenis root />
      <main className="app">
        <UI />
        <Experience/>
      </main>
    </>
  );
};

export default App;
