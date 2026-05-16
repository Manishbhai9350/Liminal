import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

export default function Snapshot() {
  const { gl } = useThree();
  const counter = useRef(0);

  const takeSnapshot = () => {
    const canvas = gl.domElement;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `snapshot-${counter.current}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });

    counter.current++;
  };

  useEffect(() => {
    const SnapButton = document.querySelector(".snapshot");
    SnapButton?.addEventListener("click", takeSnapshot);
    return () => {
      SnapButton?.removeEventListener("click", takeSnapshot);
    };
  }, []);

  return null;
}
