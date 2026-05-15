import { Effect } from "postprocessing";
import { Uniform, Matrix4 } from "three";
import { EffectComposerContext } from "@react-three/postprocessing";
import {
  forwardRef,
  useContext,
  useMemo,
  useEffect,
  useState,
  useRef,
} from "react";

// 3. GLSL Shader (checkNormalShader)
const checkNormalShader = `
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec3 viewSpaceNormal = texture2D(normalBuffer, uv).xyz * 2.0 - 1.0;
  vec3 normal = uUseWorldSpace ? viewToWorldNormal(viewSpaceNormal) : viewSpaceNormal;
  vec3 normalColor = visualizeNormal(normal, uMode);
  outputColor = vec4(normalColor, inputColor.a);
  outputColor = vec4(1.0,0.0,0.0,1.0);

  gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}
`;

// 1. Subclass Effect
class SimpleCheckNormalEffectImpl extends Effect {
  constructor({ normalBuffer, mode = 0, useWorldSpace = true }) {
    console.log(normalBuffer, mode, useWorldSpace);
    super("SimpleCheckNormalEffect", checkNormalShader, {
      uniforms: new Map([
        ["normalBuffer", new Uniform(normalBuffer)],
        ["uMode", new Uniform(mode)],
        ["uUseWorldSpace", new Uniform(useWorldSpace)],
        ["cameraMatrixWorld", new Uniform(new Matrix4())],
        ["viewMatrix", new Uniform(new Matrix4())],
      ]),
    });
  }
  set mode(value) {
    this.uniforms.get("uMode").value = value;
  }
  set useWorldSpace(value) {
    this.uniforms.get("uUseWorldSpace").value = value;
  }
}

// 2. React Wrapper
export const SimpleCheckNormalEffect = forwardRef((props, ref) => {
  const { normalPass, camera } = useContext(EffectComposerContext);
  const effect = useMemo(
    () =>
      new SimpleCheckNormalEffectImpl({
        normalBuffer: normalPass?.texture,
        ...props,
      }),
    [normalPass, props],
  );

  const loggedRef = useRef(false);

  useEffect(() => {
    if (camera) {
      if (!loggedRef.current) {
        console.log(effect);
        loggedRef.current = true;
      }
      effect.cameraMatrixWorld = camera.matrixWorld;
      effect.viewMatrix = camera.matrixWorldInverse;
      effect.projectionMatrix = camera.projectionMatrix;
      effect.inverseProjectionMatrix = camera.projectionMatrixInverse;
    }
  }, [effect, camera]);

  return <primitive ref={ref} object={effect} dispose={null} />;
});
