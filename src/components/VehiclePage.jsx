// VehicleHeroCard.jsx
"use client";

import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";





const VehicleHeroCard = ({ hero, info, ctas }) => {
  /* -------------- helpers -------------- */
  const Tagline = ({ title, text }) => (
    <div className="mb-6 text-center md:mb-0 md:text-left">
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-1 max-w-[220px] text-xs opacity-90">{text}</p>
    </div>
  );

  const SpecTile = ({ label, value }) => (
    <div className="p-4 text-center border border-gray-200 rounded-lg">
      <div className="mb-1 text-2xl">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );

  /* -------------- component ------------- */
  return (
    <><Navbar/>
    <section className="w-full gap-20 mt-20 overflow-hidden lg:flex">
      {/* LEFT — hero image + taglines */}
      <div className="relative w-full lg:w-2/3">
        <img
          src={hero.img}
          alt={`${info.name} hero`}
          className="h-[520px] w-full object-cover"
        />
        {hero.tags?.length > 0 && (
          <div className="absolute w-11/12 text-white -translate-x-1/2 bottom-6 left-1/2 md:flex md:justify-around">
            {hero.tags.map((tag) => (
              <Tagline key={tag.title} {...tag} />
            ))}
          </div>
        )}
      </div>

      {/* RIGHT — card */}
      <aside className="relative z-10 w-full max-w-md px-6 py-8 mx-auto -translate-y-6 bg-white shadow-xl lg:-ml-12 lg:translate-y-0 lg:rounded-xl">
        {/* breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-1 mb-4 text-xs text-gray-500">
          {info.breadcrumbs.map((b, i) => (
            <span key={b} className="flex items-center gap-1">
              {i !== 0 && <ChevronRight size={14} />}
              <span>{b}</span>
            </span>
          ))}
        </nav>

        {/* name + price */}
        <h1 className="text-3xl font-extrabold">{info.name}</h1>
        <p className="mt-3 text-2xl font-semibold text-red-600">{info.price}</p>
        <p className="text-sm text-gray-600">Showroom Price &nbsp; {info.showroom}</p>

        {/* quick specs */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {info.specs.map((s) => (
            <SpecTile key={s.label} {...s} />
          ))}
        </div>

        {/* links */}
        <div className="flex items-center justify-between mt-4 text-sm font-medium text-red-600">
          <button className="hover:underline">ALL SPECIFICATIONS</button>
          <button className="flex items-center gap-1 hover:underline">
            Download Brochure <ChevronRight size={14} />
          </button>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 space-y-4">
          {/* primary */}
          <button
            onClick={ctas.primary.onClick}
            className="block w-full py-3 font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800"
          >
            {ctas.primary.label}
          </button>

          {/* secondary (max 2) */}
          <div className="grid grid-cols-2 gap-4">
            {ctas.secondary.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.onClick}
                className={`rounded-md py-3 font-semibold text-white ${
                  btn.color ?? "bg-indigo-900 hover:bg-indigo-800"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
    
    </>
  );
};

export default VehicleHeroCard;
