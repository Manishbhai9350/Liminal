import { Uniform } from "three";
import { Effect, BlendFunction } from "postprocessing";
import { wrapEffect } from "@react-three/postprocessing";

// ✅ Correct shader (postprocessing format)
const CircularTransitionShader = {
  fragmentShader: `

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        outputColor.rgb = vec3(1.0,0.0,0.0);
    }
    `,
}


export class CircularTransitionEffect extends Effect {
  constructor({
    blendFunction = BlendFunction.NORMAL
  } = {}) {
    super('TiltShiftEffect', CircularTransitionShader.fragmentShader, {
      blendFunction,
      // attributes: EffectAttribute.CONVOLUTION,
      uniforms: new Map<string, Uniform<number | number[]>>([
        // ['blur', new Uniform(blur)],
      ]),
    })
  }
}

export const CircularTransition = wrapEffect(CircularTransitionEffect)
