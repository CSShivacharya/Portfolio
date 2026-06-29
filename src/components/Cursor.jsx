import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed w-5 h-5 rounded-full bg-blue-500 pointer-events-none z-[9999] opacity-70"
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  );
}

export default Cursor;