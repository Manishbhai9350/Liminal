import { extend } from "@react-three/fiber";
import { wrapEffect } from "@react-three/postprocessing";
import { Effect } from "postprocessing";
import { BlendFunction } from "postprocessing";

const fragmentShader = `
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  
  vec3 eyeVector = vec3(.3,.78,.56);
  vec3 colorVector = inputColor.rgb;
  float dotted = dot(colorVector,eyeVector);
  outputColor = vec4(vec3(dotted),1.0);
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


export default GreenEffect;