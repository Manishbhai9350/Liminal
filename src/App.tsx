import gsap from "gsap";
import UI from "./components/ui/ui";
import { SplitText } from "gsap/SplitText";
import { ScrollProvider } from "./components/scroll/scroll.provider";
import Experience, { type SceneMode } from "./scene/components/Experience";
import { useRoute } from "./utils/route";
import { SCENE_CONFIG } from "./config/scene.config";
import type { SnapZone } from "./components/scroll/scroll.engine";
import { useControls } from "leva";
import { useState } from "react";
import { ScrollUpdate } from "./components/scroll.update";
import Loader from "./components/loader/Loader";
import { LoaderProvider } from "./context/loader.context";

gsap.registerPlugin(SplitText);
const App = () => {
  const [Entered, setEntered] = useState(false);

  const path = useRoute();

  const snapConfig: SnapZone[] = [
    // All The Text Area Snapping
    {
      start: SCENE_CONFIG.sceneA_fadeOut.startProg,
      end: SCENE_CONFIG.sceneA_fadeOut.endProg,
      pin: "start",
      snapIdleMs: 1000,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.sceneA_fadeIn.startProg,
      end: SCENE_CONFIG.sceneA_fadeIn.endProg,
      pin: "end",
      snapIdleMs: 1000,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.sceneB_fadeOut.startProg,
      end: SCENE_CONFIG.sceneB_fadeOut.endProg,
      pin: "start",
      snapIdleMs: 100,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.sceneB_fadeIn.startProg,
      end: SCENE_CONFIG.sceneB_fadeIn.endProg,
      pin: "end",
      snapIdleMs: 100,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.transitionAtoB.startProg,
      end: SCENE_CONFIG.transitionAtoB.endProg,
      lerp: 0.05,
      snapIdleMs: 1500,
    },
    {
      start: SCENE_CONFIG.transitionBtoA.startProg,
      end: SCENE_CONFIG.transitionBtoA.endProg,
      lerp: 0.05,
      snapIdleMs: 1500,
    },
  ];

  const { mode } = useControls({
    mode: {
      value: "A",
      options: ["A", "B", "TransitionToA", "TransitionToB"],
    },
  });

  const [Mode, setMode] = useState<SceneMode>("A");

  if (path === "/") {
    return (
      <LoaderProvider>
        <ScrollProvider
          paused={true}
          snapConfig={snapConfig}
          snapIdleMs={2000}
          max={innerHeight * 10}
        >
          <Loader
            entered={Entered}
            onEnter={({ withAudio }) => setEntered(true)}
          />
          <ScrollUpdate mode={Mode} setMode={setMode} />
          <div className="bg"></div>
          <main className="app">
            <UI />
            {/* <h1 className="creative-dev">Creative &nbsp; Developer</h1> */}
            <button className="snapshot">Snapshot</button>
            <Experience mode={Mode} />
          </main>
        </ScrollProvider>
      </LoaderProvider>
    );
  }
};

export default App;
