import { useEffect, useState } from "react";
import { DATA } from "../config/data";
import Content from "./content";
import { setDomOverflow } from "../utils";

const UI = () => {
  const [LoadedA, setLoadedA] = useState<boolean>(false);
  const [LoadedB, setLoadedB] = useState(false);

  useEffect(() => {
    console.log(LoadedA, LoadedB);
    
    if (LoadedA && LoadedB) {
      setDomOverflow(document, "auto");
    } else {
      window.scrollTo({
        top:0,
        behavior:'instant'
      })
      setDomOverflow(document, "hidden");
    }

    return () => {};
  }, [LoadedA, LoadedB]);

  return (
    <div className="ui">
      <Content setLoaded={setLoadedA} scene="sceneA" {...DATA.sceneA} />
      <Content setLoaded={setLoadedB} scene="sceneB" {...DATA.sceneB} />
    </div>
  );
};

export default UI;
