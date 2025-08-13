'use client';

import { MouseEventHandler, useState } from "react";
import { DriftingShapes } from "./DriftingShapes";

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

    const rotateX = ((y / height) - 0.5) * 20;
    const rotateY = ((x / width) - 0.5) * 20;

    setRotation({ rotateX, rotateY });
  };

  const resetRotation = () => setRotation({ rotateX: 0, rotateY: 0 });

  const cardTransform = `rotateX(${-rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`;

  return (
    <div
      className="perspective-distant relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      <div
        className="relative p-6 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 
                   border border-white/10 shadow-md hover:shadow-lg 
                   transition-all duration-300
                   h-full
                   overflow-hidden"
        style={{
          transform: cardTransform,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease"
        }}
      >
        <DriftingShapes />

        <h3 className="text-xl font-semibold mb-4 text-slate-100">{category}</h3>

        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span
              key={item}
              className="px-3 py-1 text-sm rounded-full 
                         bg-white/5 border border-white/10 
                         text-slate-200 hover:bg-white/10 
                         transition-colors duration-200"
              style={{
                animation: `fadeIn 0.3s ease-out ${i * 0.05}s both`,
                transform: `translateZ(15px)`
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
