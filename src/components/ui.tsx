import { DATA } from "../config/data";
import Content from "./content";

const UI = () => {
  return (
    <div className="ui">
      {/* <Content {...DATA.sceneA} /> */}
      <Content {...DATA.sceneB} />
    </div>
  );
};

export default UI;
