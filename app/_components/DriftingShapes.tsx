'use client';

import { useEffect, useState } from "react";

const HUE_OFFSET_MAX = 90;
const ROTATION_OFFSET_MAX = 180;
const SCALE_OFFSET_MAX = 1.7;
const SCALE_MIN = 0.5;

/**
 * Decorative drifting shapes
 */
export function DriftingShapes() {
  const [hueShift, setHueShift] = useState(0);
  const [rotationShift, setRotationShift] = useState(0);
  const [scaleShift, setScaleShift] = useState(1);

  useEffect(() => {
    setHueShift((Math.random() * HUE_OFFSET_MAX) - HUE_OFFSET_MAX / 2);
    setRotationShift(Math.random() * ROTATION_OFFSET_MAX);
    setScaleShift((Math.random() + SCALE_MIN) * SCALE_OFFSET_MAX);
  }, []);

  return (
    <div
      className="absolute w-full h-full top-0 left-0"
      style={{
        transform: `rotate(${rotationShift}deg) scale(${scaleShift})`,
        filter: `hue-rotate(${hueShift}deg)`,
      }}
    >
      <div
        className="w-full h-full animate-pulse-spin"
      >
        <div className="absolute -top-1/5 -left-1/5 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/5 -right-1/5 w-1/2 h-1/2 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-700/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}