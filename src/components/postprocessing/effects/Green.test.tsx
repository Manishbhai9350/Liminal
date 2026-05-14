import { forwardRef } from "react";
import { extend, ReactThreeFiber } from "@react-three/fiber";
import { Effect } from "postprocessing";
import { ShaderMaterial } from "three";
import { wrapEffect } from "@react-three/postprocessing";

// Create a custom material with a green fragment shader
class GreenEffectMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {},
      vertexShader: /* glsl */ `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
            // Discard the input scene and output pure green
            outputColor = vec4(0.0, 1.0, 0.0, 1.0);
        }
      `,
    });
  }
}

// Extend R3F to recognize the material
extend({ GreenEffectMaterial });

// Declare the type for JSX
declare module "@react-three/fiber" {
  interface ThreeElements {
    greenEffectMaterial: ReactThreeFiber.Object3DNode<
      GreenEffectMaterial,
      typeof GreenEffectMaterial
    >;
  }
}

// Create the effect class
class GreenEffect extends Effect {
  constructor() {
    super("GreenEffect", new GreenEffectMaterial());
  }
}

// Wrap the effect for React
const GreenPass = forwardRef((props, ref) => {
  const effect = wrapEffect(GreenEffect);
  return <primitive ref={ref} object={effect} {...props} />;
});

export default GreenPass;
