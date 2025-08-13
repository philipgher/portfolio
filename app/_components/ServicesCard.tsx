'use client';

import { MouseEventHandler, useState } from "react";
import { DriftingShapes } from "./DriftingShapes";

export function ServiceCard({
  title,
  description,
  icon,
  featured,
}: {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
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

  const cardTransform = `rotateX(${-rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      key={title}
      className={`
        p-8 rounded-xl text-white
        shadow-lg transition-shadow duration-500 perspective-distant
        transform-gpu will-change-transform
        overflow-hidden border border-white/10
        ${featured ? "sm:col-span-2 lg:col-span-3 mx-20 animate-bg-image bg-gradient-to-l from-indigo-800/30 via-blue-800/30 to-indigo-800/30" : ""}
        `}
      style={{
        transform: cardTransform,
        transformStyle: "preserve-3d",
      }}
    >
      <DriftingShapes />

      <div
        className={`
          mb-6 select-none
          ${featured ? "text-6xl" : "text-4xl"}
        `}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className={`text-xl font-extrabold ${featured ? "text-white" : "font-semibold mb-2"}`}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-300">
        {description}
      </p>
    </div >
  );
};