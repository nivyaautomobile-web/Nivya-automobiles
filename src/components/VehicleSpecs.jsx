/* components/VehicleSpecs.jsx */
"use client";

import { useState } from "react";

const VehicleSpecs = ({ img, heading, blurb, transmissions, sections }) => {
  const [activeTrans, setActiveTrans] = useState(transmissions[0]);
  const [activeTab, setActiveTab]     = useState(sections[0].title);

  /* helper — return rows array for current tab + transmission */
  const getRows = () => {
    const tab = sections.find((s) => s.title === activeTab);
    if (!tab) return [];

    // rows can be an object keyed by transmission OR a plain array
    if (Array.isArray(tab.rows)) return tab.rows;
    return tab.rows[activeTrans] || [];
  };

  const rows = getRows();

  return (
    <section className="flex flex-col w-full mx-auto max-w-7xl lg:flex-row">
      {/* ───────── Left image ───────── */}
      <figure className="flex-1">
        <img
          src={img}
          alt="vehicle engine"
          className="h-auto w-full object-contain lg:h-[540px]"
        />
      </figure>

      {/* ───────── Right card ───────── */}
      <div className="flex-1 px-6 py-10 lg:pl-10">
        {/* Heading / blurb */}
        <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{blurb}</p>

        {/* Transmission toggle */}
        <div className="inline-flex p-1 mt-6 bg-gray-200 rounded-full">
          {transmissions.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTrans(t)}
              className={`rounded-full px-4 py-1 text-xs font-medium transition sm:text-sm ${
                activeTrans === t
                  ? "bg-red-600 text-white shadow"
                  : "text-gray-700 hover:bg-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 text-sm font-semibold text-gray-600 uppercase border-b border-gray-300">
          {sections.map((s) => (
            <button
              key={s.title}
              onClick={() => setActiveTab(s.title)}
              className={`mr-6 pb-3 transition ${
                activeTab === s.title
                  ? "border-b-2 border-red-600 text-red-600"
                  : "hover:text-gray-800"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Scrollable table */}
        <div className="mt-4 max-h-[320px] overflow-y-auto pr-2">
          <table className="w-full text-sm">
            <tbody>
              {rows.map(({ label, value }) => (
                <tr key={label} className="border-t">
                  <td className="py-3 font-medium text-gray-800">{label}</td>
                  <td className="py-3 text-gray-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default VehicleSpecs;
