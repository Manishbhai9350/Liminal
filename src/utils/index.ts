import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export const SplitIt = (elem: gsap.DOMTarget, vars?: SplitText.Vars) => {
  return new SplitText(elem, vars);
};
