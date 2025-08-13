'use client';

import { MouseEventHandler, useState } from "react";

export function TiltCard({
  category,
  items
}: {
  category: string;
  items: string[];
}) {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove: MouseEventHandler = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * 30;
    const rotateY = ((x / width) - 0.5) * 30;

    setRotation({ rotateX, rotateY });
  };

  const resetRotation = () => setRotation({ rotateX: 0, rotateY: 0 });

  const cardTransform = `rotateX(${-rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(1.05)`;

  const shadowX = -rotation.rotateY * 0.6;
  const shadowY = rotation.rotateX * 0.6;

  return (
    <div
      className="perspective-distant cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      {/* Depth shadow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg bg-purple-500/50 blur-lg pointer-events-none"
        style={{
          transform: `translateX(${shadowX}px) translateY(${shadowY}px) scale(1)`,
          zIndex: 0,
        }}
      ></div>

      {/* Main Card */}
      <div
        className="h-full
          p-6 rounded-lg text-white
          bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-900
          shadow-xl transition-shadow duration-500 will-change-transform
          border border-white/10
        "
        style={{
          transform: cardTransform,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease",
          zIndex: 10,
        }}
      >
        {/* Glow edge effect */}
        <div className="absolute inset-0 rounded-lg border border-pink-400/40 pointer-events-none"></div>

        {/* Hover color overlay */}
        <div className="
          absolute inset-0 rounded-lg
          bg-gradient-to-r from-purple-700 via-pink-600 to-red-500
          opacity-0 hover:opacity-20 transition-opacity duration-500
          pointer-events-none mix-blend-screen
        "></div>

        <h3 className="text-xl font-semibold mb-4 drop-shadow-md">{category}</h3>
        <ul className="list-none space-y-2 text-sm">
          {items.map((item) => (
            <li
              key={item}
              className="before:content-['•'] before:text-pink-400 before:mr-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}