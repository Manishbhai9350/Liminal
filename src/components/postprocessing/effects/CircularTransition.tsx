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
import circularTransitionShader from "../shaders/transition.glsl";
import { useLoader } from "../../../hooks/useLoader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// ─── Shader ───────────────────────────────────────────────────────────────────

const CircularTransitionShader = {
  fragmentShader: circularTransitionShader,
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
        ["uLoaderColor", new THREE.Uniform(new THREE.Color("#111"))],
        ["uLoaded", new THREE.Uniform(0)],
        ["uLoadProg", new THREE.Uniform(0)],
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

  const loader = useLoader();

  useGSAP(() => {
    if (!loader.entered) return;

    // proxy object so GSAP has a plain value to tween
    const proxy = { value: 0 };

    const tween = gsap.to(proxy, {
      value: 1,
      duration: 1.2,
      ease: "power3.in",
      onUpdate() {
        effect.uniforms.get("uLoadProg")!.value = proxy.value;
      },
      onComplete() {
        effect.uniforms.get("uLoaded")!.value = 1;
        loader.setRevealed(true)
      },
    });

    // kill the tween if the component unmounts mid-animation
    return () => {
      tween.kill();
    };
  }, [loader.entered, effect]);

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
