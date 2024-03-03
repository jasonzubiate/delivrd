"use client";

import { useEffect, useState } from "react";

export default function CursorDot() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setTimeout(() => {
        setDotPosition({ x: mouseX, y: mouseY });
        setIsVisible(true);
      }, 75);
    });
  }, []);

  const dotStyle: React.CSSProperties = {
    transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
    opacity: isVisible ? 1 : 0,
    transition: "transform 0.1s, opacity 0.2s",
  };

  return (
    <div
      className="hidden sm:flex w-[12px] h-[12px] bg-demo-smoke rounded-full fixed pointer-events-none opacity-0 z-10 mix-blend-difference"
      style={dotStyle}
    ></div>
  );
}
