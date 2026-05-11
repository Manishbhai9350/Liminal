import { forwardRef } from "react";
import { Uniform } from "three";
import { Effect, BlendFunction } from "postprocessing";
import { wrapEffect } from "@react-three/postprocessing";

// ✅ Correct shader (postprocessing format)
const fragmentShader = `
  uniform float u1;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // Keep alpha from input, set red channel fully, others to zero
  outputColor = vec4(1.0, 0.0, 0.0, inputColor.a);
}
`;

// ✅ Effect implementation
class CircularTransitionImpl extends Effect {
  constructor({ u1 = 0 } = {}) {
    super("CircularTransition", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map([["u1", new Uniform(u1)]]),
    });
  }

  update(renderer, inputBuffer, deltaTime) {
    console.log("meow"); // ✅ WILL RUN
  }
}

// ✅ Wrap effect (VERY IMPORTANT)
const CircularTransitionEffect = wrapEffect(CircularTransitionImpl);

// ✅ React component
export const CircularTransition = forwardRef((props, ref) => {
  return <CircularTransitionEffect ref={ref} {...props} />;
});
