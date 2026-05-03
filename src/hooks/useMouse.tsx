import { useEffect } from 'react';
import * as THREE from 'three';

const globalMouse = new THREE.Vector2();
let initialized = false;

export function useSharedMouse() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      globalMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      globalMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    canvas.addEventListener("mousemove", handleMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      initialized = false;
    };
  }, []);

  return globalMouse;
}