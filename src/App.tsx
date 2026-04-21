import gsap from "gsap";
import UI from "./components/ui";
import { SplitText } from "gsap/SplitText";
import { ScrollProvider } from "./components/scroll/scroll.provider";
import Experience from "./scene/components/Experience";
import { useRoute } from "./utils/route";
import TransitionPage from "./experiment/transition";

gsap.registerPlugin(SplitText);
const App = () => {
  const path = useRoute();
  if (path === "/") {
    return (
      <ScrollProvider paused={true} max={innerHeight * 25}>
        <div className="bg"></div>
        <main className="app">
          {/* <UI /> */}
          <Experience />
        </main>
      </ScrollProvider>
    );
  } else if (path === "/transition") {
    return <TransitionPage />;
  }
};

export default App;
