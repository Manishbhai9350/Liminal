import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const DefualtVars: SplitText.Vars = {
  type: "words, lines",
  mask: "lines",
};

export const SplitIt = (elem: gsap.DOMTarget, vars?: SplitText.Vars) => {
  return new SplitText(elem, {
    ...DefualtVars,
    ...vars,
  });
};

export const setDomOverflow = (document: Document, overflow: string) => {
  return;
  document.documentElement.style.overflow = overflow;
  document.body.style.overflow = overflow;
  console.log(overflow)
};
