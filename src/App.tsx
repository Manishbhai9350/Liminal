import gsap from "gsap";
import UI from "./components/ui/ui";
import { SplitText } from "gsap/SplitText";
import { ScrollProvider } from "./components/scroll/scroll.provider";
import Experience from "./scene/components/Experience";
import { useRoute } from "./utils/route";
import TransitionPage from "./experiment/transition";
import { SCENE_CONFIG } from "./config/scene.config";
import type { SnapZone } from "./components/scroll/scroll.engine";

gsap.registerPlugin(SplitText);
const App = () => {
  const path = useRoute();

  const snapConfig: SnapZone[] = [

    // All The Text Area Snapping
    {
      start: SCENE_CONFIG.sceneA_fadeOut.startProg,
      end: SCENE_CONFIG.sceneA_fadeOut.endProg,
      pin:'start',
      snapIdleMs: 1000,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.sceneA_fadeIn.startProg,
      end: SCENE_CONFIG.sceneA_fadeIn.endProg,
      pin:'end',
      snapIdleMs: 1000,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.sceneB_fadeOut.startProg,
      end: SCENE_CONFIG.sceneB_fadeOut.endProg,
      pin:'start',
      snapIdleMs: 1000,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.sceneB_fadeIn.startProg,
      end: SCENE_CONFIG.sceneB_fadeIn.endProg,
      pin:'end',
      snapIdleMs: 1000,
      lerp: 0.03, // slower snap animation
      lerpFn: (cur, tgt, f) => cur + (tgt - cur) * f, // plain linear lerp
    },
    {
      start: SCENE_CONFIG.transitionAtoB.startProg,
      end: SCENE_CONFIG.transitionAtoB.endProg,
      lerp:.05,
      snapIdleMs:500
    },
    {
      start: SCENE_CONFIG.transitionBtoA.startProg,
      end: SCENE_CONFIG.transitionBtoA.endProg,
      lerp:.05,
      snapIdleMs:500
    },
  ];

  if (path === "/") {
    return (
      <ScrollProvider
        paused={true}
        snapConfig={snapConfig}
        snapIdleMs={1000}
        max={innerHeight * 10}
      >
        <div className="bg"></div>
        <main className="app">
          <UI />
          <Experience mode="transition" />
        </main>
      </ScrollProvider>
    );
  } else if (path === "/transition") {
    return <TransitionPage />;
  }
};

export default App;
