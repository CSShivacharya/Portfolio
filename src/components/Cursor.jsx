import { useEffect, useRef } from "react";

function Cursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!pointer.matches || motion.matches) return undefined;

    document.documentElement.classList.add("custom-pointer");
    let frame = 0;
    let x = -100;
    let y = -100;

    const moveCursor = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        if (cursor.current) {
          cursor.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        frame = 0;
      });
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("pointermove", moveCursor);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-pointer");
    };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
}

export default Cursor;
