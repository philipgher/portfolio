'use client';

import { useState } from "react";
import { ContactOptions } from "./ContactOptions";

export default function FloatingCoffeeMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3">
      {/* Main Coffee Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 sm:p-5 rounded-full 
                   bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500
                   shadow-lg hover:shadow-xl 
                   transition-all duration-300 
                   transform hover:-translate-y-1"
      >
        {/* Gentle Pulse Ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-subtle-ping pointer-events-none"></span>
        )}

        {/* Coffee Icon */}
        <span
          className={`text-2xl text-white transition-transform duration-300 
            ${isOpen ? "rotate-45" : "group-hover:scale-110"}`}
        >
          ☕
        </span>
        <span className="sr-only">Contact me</span>
      </button>

      {/* Contact Menu Items */}
      <ContactOptions isOpen={isOpen} />
    </div >
  );
}
