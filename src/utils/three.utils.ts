import type { OrthographicCamera, PerspectiveCamera } from "three";

interface SceneBoundsReturn {
  width: number;
  height: number;
}

type SceneBoundsProps =
  | {
      camera: PerspectiveCamera | OrthographicCamera;
      distance: number; // distance from camera to plane
    }
  | {
      fov: number;
      distance: number;
      aspect: number;
    };

export const SceneBounds = (props: SceneBoundsProps): SceneBoundsReturn => {
  let width = 0;
  let height = 0;

  // --- CASE 1 : Camera provided ---
  if ("camera" in props) {
    const { camera, distance } = props;

    // Perspective camera
    if ((camera as PerspectiveCamera).isPerspectiveCamera) {
      const cam = camera as PerspectiveCamera;
      const fovRad = (cam.fov * Math.PI) / 180;

      height = 2 * Math.tan(fovRad / 2) * Math.abs(distance);
      width = height * cam.aspect;
    }

    // Orthographic camera
    else if ((camera as OrthographicCamera).isOrthographicCamera) {
      const cam = camera as OrthographicCamera;

      // distance does NOT change ortho size
      width = cam.right - cam.left;
      height = cam.top - cam.bottom;
    } else {
      throw new Error("Unsupported camera type");
    }
  }

  // --- CASE 2 : Raw values ---
  else {
    const { fov, distance, aspect } = props;
    const fovRad = (fov * Math.PI) / 180;

    height = 2 * Math.tan(fovRad / 2) * Math.abs(distance);
    width = height * aspect;
  }

  return { width, height };
};