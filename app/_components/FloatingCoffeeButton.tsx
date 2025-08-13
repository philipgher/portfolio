'use client';

import { useState } from "react";
import { ContactOptions } from "./ContactOptions";

export default function FloatingCoffeeMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end space-y-3 text-white">
      {/* Main Coffee Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full bg-fuchsia-800 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      >
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          ☕
        </span>
        <span className="sr-only">Contact me</span>
      </button>

      <ContactOptions isOpen={isOpen} />

    </div>
  );
}
