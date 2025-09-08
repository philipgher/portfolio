'use client';

import { MouseEventHandler, useState } from "react";
import { DriftingShapes } from "./DriftingShapes";
import Link from "next/link";

export function TiltCard({
  category,
  items,
  featureLink,
}: {
  category: string;
  items: string[];
  featureLink?: {
    label: string;
    link: string;
  };
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

        {/* {featureLink && (
          <Link
            href={featureLink.link}
            className="group mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span className="relative z-10">{featureLink.label}</span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)",
                zIndex: 1,
              }}
            />
          </Link>
        )} */}
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
