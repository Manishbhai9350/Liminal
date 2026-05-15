import { extend } from "@react-three/fiber";
import { wrapEffect } from "@react-three/postprocessing";
import { Effect } from "postprocessing";
import { BlendFunction } from "postprocessing";

const fragmentShader = `
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  
  outputColor = vec4(vec3(dot(inputColor.rgb,vec3(.3,.78,.56))),1.0);

}
`;

class GreenEffectImpl extends Effect {
  constructor() {
    super("GreenEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
    });
  }
}


const GreenEffect = wrapEffect(GreenEffectImpl);

extend({ GreenEffect })

export default GreenEffect;