"use client";
import { useState } from "react";

const CarVisualizer = ({ name, wordMark = "Automotive", colors = [] }) => {
  // ✅ Always call useState unconditionally
  const [activeColor, setActiveColor] = useState(colors[0] || {});

  if (!colors.length) return null;

  return (
    <section className="relative w-full max-w-6xl py-10 mx-auto">
      {/* Faded background word */}
      <h2
        className="pointer-events-none absolute inset-x-0 top-16 hidden select-none text-[22vw]
                   font-extrabold uppercase leading-none text-gray-100 opacity-20 sm:block"
      >
        {wordMark}
      </h2>

      {/* Heading */}
      <div className="relative z-10 flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold sm:text-4xl">{name}</h1>
      </div>

      {/* Car Image */}
      <div className="relative z-10 flex justify-center mt-8">
        <img
          src={activeColor.images}
          alt={`${name} - ${activeColor.name}`}
          className="h-[260px] w-auto max-w-[90%] object-contain sm:h-[340px] lg:h-[420px]"
        />
      </div>

      {/* Color Swatches */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-8">
        {colors.map((c) => (
          <button
            key={c.name}
            title={c.name}
            onClick={() => setActiveColor(c)}
            className={`h-10 w-10 overflow-hidden rounded-full border-2 transition ${
              activeColor.name === c.name
                ? "border-gray-900 scale-105"
                : "border-transparent hover:scale-105"
            }`}
          >
            <div className="flex w-full h-full">
              <div
                className="w-1/2 h-full"
                style={{ backgroundColor: c.hex1 || c.hex }}
              />
              <div
                className="w-1/2 h-full"
                style={{ backgroundColor: c.hex2 || c.hex }}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CarVisualizer;
