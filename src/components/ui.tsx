import { useEffect, useLayoutEffect, useState } from "react";
import { DATA } from "../config/data";
import Content from "./content";
import { setDomOverflow } from "../utils";
import { useScroll } from "./scroll/useScroll";

const UI = () => {
  const [LoadedA, setLoadedA] = useState<boolean>(false);
  const [LoadedB, setLoadedB] = useState(false);

  const scroller = useScroll()

  useEffect(() => {
    
    if(LoadedA && LoadedB) {
      scroller.resume();
    }
  
    return () => {
      
    }
  }, [LoadedA,LoadedB])
  

  return (
    <div className="ui">
      <Content
        loaded={LoadedA}
        setLoaded={setLoadedA}
        scene="sceneA"
        {...DATA.sceneA}
      />
      <Content
        loaded={LoadedB}
        setLoaded={setLoadedB}
        scene="sceneB"
        {...DATA.sceneB}
      />
    </div>
  );
};

export default UI;
