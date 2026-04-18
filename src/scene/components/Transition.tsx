import { createPortal, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import TransitionMaterial from "../../experiment/components/transition.material";

const FALLBACK_BG = 0x0a1a40;

const makeTarget = (w: number, h: number) => {
  const rt = new THREE.WebGLRenderTarget(w, h, {
    depthBuffer: true,
    stencilBuffer: false,
    type: THREE.UnsignedByteType,
    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  });
  rt.texture.colorSpace = THREE.SRGBColorSpace;
  return rt;
};

const createRtScene = () => {
  const s = new THREE.Scene();
  s.background = new THREE.Color(FALLBACK_BG);
  return s;
};

type TransitionProps = {
  scene1: ReactNode;
  scene2: ReactNode;
};

const Transition = ({ scene1, scene2 }: TransitionProps) => {
  const { width, height } = useThree((v) => v.viewport);
  const { gl, camera, size } = useThree();

  const [rtScene1] = useState(createRtScene);
  const [rtScene2] = useState(createRtScene);

  const bgTextureRef = useRef<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    let cancelled = false;

    let tex1: THREE.Texture | null = null;
    let tex2: THREE.Texture | null = null;

    // Helper to apply textures when both are loaded
    function applyTexturesIfReady() {
      if (cancelled) {
        if (tex1) tex1.dispose();
        if (tex2) tex2.dispose();
        return;
      }
      if (tex1 && tex2) {
        // Set references
        bgTextureRef.current = tex1;
        // Set backgrounds for both scenes
        rtScene1.background = tex2; // Scene 1 background
        rtScene2.background = tex1; // Scene 2 background
      }
    }

    loader.load(
      "/Design/bg2.jpeg",
      (t) => {
        tex1 = t;
        tex1.colorSpace = THREE.SRGBColorSpace;
        applyTexturesIfReady();
      },
      undefined,
      () => {
        // Error: fallback
        tex1 = null;
        applyTexturesIfReady();
      },
    );

    loader.load(
      "/Design/bg.jpeg",
      (t) => {
        tex2 = t;
        tex2.colorSpace = THREE.SRGBColorSpace;
        applyTexturesIfReady();
      },
      undefined,
      () => {
        // Error: fallback
        tex2 = null;
        applyTexturesIfReady();
      },
    );

    return () => {
      cancelled = true;
      const t = bgTextureRef.current;
      bgTextureRef.current = null;
      if (t) t.dispose();
      if (tex2) tex2.dispose();
      rtScene1.background = new THREE.Color(FALLBACK_BG);
      rtScene2.background = new THREE.Color(FALLBACK_BG);
    };
  }, [rtScene1, rtScene2]);

  const target1 = useMemo(() => makeTarget(1, 1), []);
  const target2 = useMemo(() => makeTarget(1, 1), []);

  useLayoutEffect(() => {
    const dpr = gl.getPixelRatio();
    const w = Math.max(1, Math.floor(size.width * dpr));
    const h = Math.max(1, Math.floor(size.height * dpr));
    target1.setSize(w, h);
    target2.setSize(w, h);
  }, [gl, size.width, size.height, target1, target2]);

  useEffect(() => {
    return () => {
      target1.dispose();
      target2.dispose();
    };
  }, [target1, target2]);

  useFrame(() => {
    gl.setRenderTarget(target1);
    gl.clear(true, true, true);
    gl.render(rtScene1, camera);

    gl.setRenderTarget(target2);
    gl.clear(true, true, true);
    gl.render(rtScene2, camera);

    gl.setRenderTarget(null);
  });

  const bg1 = target1.texture;
  const bg2 = target2.texture;

  return (
    <>
      {createPortal(scene1, rtScene1, { events: { enabled: false } })}
      {createPortal(scene2, rtScene2, { events: { enabled: false } })}
      <mesh renderOrder={999}>
        <planeGeometry args={[width, height, 32, 32]} />
        <TransitionMaterial bg1={bg1} bg2={bg2} />
      </mesh>
    </>
  );
};

export default Transition;
