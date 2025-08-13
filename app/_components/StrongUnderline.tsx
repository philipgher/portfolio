'use client';

import { useEffect, useRef, useState } from "react";

export function StrongUnderline({
  children,
  color
}: {
  children: React.ReactNode;
  color: 'pink' | 'blue' | 'purple';
}) {
  const dynamicClassName =
    color === 'blue' ? 'text-blue-300 after:bg-blue-400/40' :
      color === 'purple' ? 'text-purple-300 after:bg-purple-400/40' :
        color === 'pink' ? 'text-pink-300 after:bg-pink-400/40' :
          '';

  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const siblings =
        Array.from(
          ref.current.parentNode?.querySelectorAll(".nth-delay") || []
        )
          .filter((el) => el instanceof HTMLElement) as HTMLElement[];

      const idx = siblings.indexOf(ref.current);
      setIndex(idx);
    }
  }, []);

  return (
    <strong
      ref={ref}
      className={`
        nth-delay
        relative after:absolute after:-bottom-1 after:left-0 nth- after:w-full after:h-0.5 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform
        ${dynamicClassName}`
      }
    >
      <style>
        {
          '.nth-delay:nth-child(' + (index + 1) + ')::after { transition-delay: ' + (index * 100) + 'ms; }'
        }
      </style>
      {children}
    </strong>
  );
}