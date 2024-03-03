import { useState, useRef, useEffect } from "react";

export function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const handlePointerMove = ({ clientX, clientY }) => {
      if (ref.current) {
        animationFrameId = requestAnimationFrame(() => {
          const rect = ref.current.getBoundingClientRect();
          const x = clientX - rect.width / 2;
          const y = clientY - rect.height / 2;
          setPoint({ x, y });
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return { point, ref };
}
