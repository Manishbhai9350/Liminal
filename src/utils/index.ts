import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const DefualtVars: SplitText.Vars = {
  type: "words, lines",
  mask: "lines"
};

export const SplitIt = (elem: gsap.DOMTarget, vars?: SplitText.Vars) => {
  return new SplitText(elem, {
    ...DefualtVars,
    ...vars,
  });
};

export const setDomOverflow = (document: Document, overflow: string) => {
  // document.documentElement.style.overflow = overflow;
  document.body.style.overflow = overflow;
  // document.body.setAttribute("data-lenis-prevent", overflow == "hidden" ?  "true" : "");
};


export const getSectionProgress = (
  global: number,
  start: number,
  end: number
)  => {
  const clamped = Math.min(Math.max(global - start, 0), end - start);
  return clamped / (end - start);
}