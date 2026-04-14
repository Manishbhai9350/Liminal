import "lenis/dist/lenis.css";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import UI from "./components/ui";
import Experience from "./scene/components/Experience";
import { SplitText } from "gsap/SplitText";
import { ScrollProvider } from "./components/scroll/scroll.provider";

gsap.registerPlugin(SplitText);
const App = () => {
  return (
    <ScrollProvider paused={true} max={innerHeight * 10}>
      <div className="bg"></div>
      <ReactLenis />
      <main className="app">
        <UI />
        {/* <Experience /> */}
      </main>
    </ScrollProvider>
  );
};

export default App;
