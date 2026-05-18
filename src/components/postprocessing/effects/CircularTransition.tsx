import * as THREE from "three";
import { Effect, BlendFunction } from "postprocessing";
import {
  forwardRef,
  useMemo,
  useEffect,
  type Ref,
  type RefObject,
} from "react";
import { useThree } from "@react-three/fiber";
import { useScroll } from "../../scroll/useScroll";
import { InBounds } from "../../../utils";
import { SCENE_BOUNDS } from "../../../config/scene.config";

// ─── Shader ───────────────────────────────────────────────────────────────────

const CircularTransitionShader = {
  fragmentShader: /* glsl */ `
    #define PI 3.141592653589793

    uniform float uSwap;
    uniform sampler2D uMap;
    uniform float uProgress;
    uniform float uWaveSize;
    uniform float uInnerDistortion;
    uniform float uWaveGlow;
    uniform float uMaskRadius;
    uniform float uTime;
    uniform vec2 uResolution;

    float cubicIn(float t) {
      return t * t;
    }

    float Circle(vec2 uv, float threshold, float radius) {
      return smoothstep(threshold, 0.0, length(uv) - radius + threshold);
    }

    vec2 Mul(vec2 uv, float value) {
      uv -= 0.5;
      uv *= value;
      uv += 0.5;
      return uv;
    }


    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      float prog = uProgress;
      float progress = cubicIn(prog * 1.41);
      float aspect = uResolution.x / uResolution.y;

      if (progress <= 0.0) {
        outputColor = inputColor;
        return;
      }

      // Swap scenes based on direction
      vec4 sceneA = uSwap < 0.5 ? inputColor : texture2D(uMap, uv);
      vec4 sceneB = uSwap < 0.5 ? texture2D(uMap, uv) : inputColor;

      vec2 centeredUV = (uv - 0.5) * vec2(aspect, 1.0);
      float time = uTime * 2.5;

      float circleWave = Circle(centeredUV, 0.3, progress);
      float wave = circleWave * smoothstep(0.0, 2.0, abs(sin(time + circleWave * PI * 3.0)));

      float height = 0.7;

      // Scene 1 — distorted UV resample
      vec2 uv1 = Mul(uv, 1.0 - (circleWave + wave) * height);
      vec3 tDiffuse1 = uSwap < 0.5
        ? texture2D(inputBuffer, uv1).rgb
        : texture2D(uMap, uv1).rgb;

      // Scene 2 — incoming
      float circleMask = Circle(centeredUV, 0.075 * progress, progress - uMaskRadius);
      float circleInnerDistortion = Circle(centeredUV, 0.25 * progress, progress - uMaskRadius);
      vec2 uv2 = Mul(uv, 1.0 + (uInnerDistortion - circleInnerDistortion * uInnerDistortion));
      vec3 tDiffuse2 = uSwap < 0.5
        ? texture2D(uMap, uv2).rgb
        : texture2D(inputBuffer, uv2).rgb;

      vec3 color = mix(tDiffuse1, tDiffuse2, circleMask);

      float waveColor = wave * uWaveGlow * (1.0 - Circle(centeredUV, 0.1, progress - 0.1));
      color += waveColor;

      color *= 1.0 - 0.7 * clamp(
        0.0, 1.0,
        circleMask - Circle(centeredUV + vec2(-0.1, 0.1) * progress, 0.175 * progress, progress - uMaskRadius)
      );

      outputColor = vec4(color, inputColor.a);

      // outputColor = inputColor;
    }
  `,
};

// ─── Effect Class ─────────────────────────────────────────────────────────────

export class CircularTransitionEffect extends Effect {
  private fboRef: RefObject<THREE.Texture | null>;

  constructor({
    blendFunction = BlendFunction.NORMAL,
    fbo,
    resolution = new THREE.Vector2(1, 1),
  }: {
    blendFunction?: BlendFunction;
    fbo: RefObject<THREE.Texture | null>;
    resolution?: THREE.Vector2;
  }) {
    super("CircularTransitionEffect", CircularTransitionShader.fragmentShader, {
      blendFunction,
      uniforms: new Map<string, THREE.Uniform<any>>([
        ["uSwap", new THREE.Uniform(0)],
        ["uMap", new THREE.Uniform(null)],
        ["uProgress", new THREE.Uniform(0)],
        ["uResolution", new THREE.Uniform(resolution)],
        ["uTime", new THREE.Uniform(0)],
        ["uWaveSize", new THREE.Uniform(1)],
        ["uMaskRadius", new THREE.Uniform(0.18)],
        ["uInnerDistortion", new THREE.Uniform(-1.4)],
        ["uWaveGlow", new THREE.Uniform(1)],
      ]),
    });
    this.fboRef = fbo;
    this.time = 0;
  }

  override update(
    _renderer: THREE.WebGLRenderer,
    _inputBuffer: THREE.WebGLRenderTarget,
    deltaTime: number,
  ) {
    if (this.fboRef.current) {
      this.uniforms.get("uMap")!.value = this.fboRef.current;
    }
    this.time += deltaTime;
    this.uniforms.get("uTime")!.value = this.time;
    // this.uniforms.get("uProgress")!.value = Math.abs(Math.sin(this.time * 0.4));
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type CircularTransitionProps = {
  progress?: number;
  fbo: RefObject<THREE.Texture | null>;
};

// ─── React Component ──────────────────────────────────────────────────────────

export const CircularTransition = forwardRef<
  CircularTransitionEffect,
  CircularTransitionProps
>(function CircularTransition(
  { progress = 0, fbo }: CircularTransitionProps,
  ref: Ref<CircularTransitionEffect>,
) {
  const { size } = useThree();

  const effect = useMemo(
    () =>
      new CircularTransitionEffect({
        fbo,
        resolution: new THREE.Vector2(size.width, size.height),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // create once — uniforms updated imperatively below
  );

  // Sync progress
  useEffect(() => {
    effect.uniforms.get("uProgress")!.value = 1;
  }, [progress, effect]);

  // Sync resolution on resize
  useEffect(() => {
    effect.uniforms.get("uResolution")!.value.set(size.width, size.height);
  }, [size, effect]);

  const scroll = useScroll();

  useEffect(() => {
    const update = (p) => {
      const prog = p.progress;
      let uProgress = 0;
      let uSwap = 0;

      if (InBounds(prog, [0.1, 0.3])) {
        uProgress = THREE.MathUtils.mapLinear(prog, 0.1, 0.3, 0, 1);
        uSwap = 0; // A → B: inputColor=A, uMap=B
      } else if (InBounds(prog, [0.7, 0.9])) {
        uProgress = THREE.MathUtils.mapLinear(prog, 0.7, 0.9, 0, 1);
        uSwap = 1; // B → A: swap them
      } else if (InBounds(prog, SCENE_BOUNDS.A)) {
        uProgress = 0;
      } else if (InBounds(prog, SCENE_BOUNDS.B)) {
        uProgress = 1;
      }

      effect.uniforms.get("uProgress")!.value = uProgress;
      effect.uniforms.get("uSwap")!.value = uSwap;
    };
    scroll.on("update", update);
    return () => scroll.off("update", update);
  }, []);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
