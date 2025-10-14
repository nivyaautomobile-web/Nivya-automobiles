import React, { useState } from "react";

const categories = [
  "Exteriors",
  "Interior",
  "Car Care",
  "Infotainment",
  "Lifestyle",
  "Safety and Security",
];

const accessoriesData = {
  Exteriors: [
    {
      id: 1,
      title: "Premium Bi-Cycle Stand | Jimny",
      code: "9917B-78R01",
      img: "https://images.unsplash.com/photo-1605559424843-bd38b5d10d2a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Premium Roof Bars | Jimny",
      code: "99176-78R11",
      img: "https://images.unsplash.com/photo-1571607387987-cc1553d7b6ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Premium Roof Basket | Jimny",
      code: "99177-78R01",
      img: "https://images.unsplash.com/photo-1618821531143-4ed2bfa5a1d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Mud Flap | Grand Vitara",
      code: "72201M76TX0",
      img: "https://images.unsplash.com/photo-1582152627356-d86cf1ce2d9b?auto=format&fit=crop&w=800&q=80",
    },
  ],
  Interior: [
    {
      id: 1,
      title: "All-weather Floor Mats | Swift",
      code: "7591M74R10",
      img: "https://images.unsplash.com/photo-1597003352753-b2f015f2122a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Seat Cover - Premium Black | Baleno",
      code: "990J0M68PA2-010",
      img: "https://images.unsplash.com/photo-1570066988297-bd6e94f84591?auto=format&fit=crop&w=800&q=80",
    },
  ],
  "Car Care": [
    {
      id: 1,
      title: "Windshield Cleaner",
      code: "990J0M99901-001",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8f73e409?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Tyre Polish",
      code: "990J0M99901-002",
      img: "https://images.unsplash.com/photo-1582224207361-4ba3943fcddf?auto=format&fit=crop&w=800&q=80",
    },
  ],
  Infotainment: [
    {
      id: 1,
      title: "SmartPlay Studio Touchscreen",
      code: "990J0M68PA3-007",
      img: "https://images.unsplash.com/photo-1611579649022-5b63d88be0e9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Rear Parking Camera Kit",
      code: "990J0M99901-045",
      img: "https://images.unsplash.com/photo-1644899741863-569ecb48e6d9?auto=format&fit=crop&w=800&q=80",
    },
  ],
  Lifestyle: [
    {
      id: 1,
      title: "Maruti Branded Cap",
      code: "990J0M99901-101",
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Key Chain – Metal",
      code: "990J0M99901-102",
      img: "https://images.unsplash.com/photo-1552254969-35164b0bde30?auto=format&fit=crop&w=800&q=80",
    },
  ],
  "Safety and Security": [
    {
      id: 1,
      title: "Reverse Parking Sensor Kit",
      code: "990J0M99901-022",
      img: "https://images.unsplash.com/photo-1603993097397-89d2b0c44a4f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Steering Lock",
      code: "990J0M99901-090",
      img: "https://images.unsplash.com/photo-1609260583080-1594a6ef5404?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export default function Accessories() {
  const [activeCategory, setActiveCategory] = useState("Exteriors");

  return (
    <section className="min-h-screen px-4 py-10 bg-gray-50 md:px-10">
      {/* HEADER */}
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center">
        Accessories
      </h1>

      {/* CATEGORY TABS */}
      <div className="mb-10 overflow-x-auto lg:overflow-visible">
        <div className="inline-flex gap-2 lg:flex lg:justify-center lg:gap-4 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {accessoriesData[activeCategory].map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-2xl ring-1 ring-gray-200 hover:ring-red-300 hover:shadow-lg"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-100" />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col flex-grow p-5">
              <h2 className="flex-grow text-base font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-1 mb-4 font-mono text-xs text-gray-500">
                {item.code}
              </p>

              {/* CTA */}
              <button className="inline-flex items-center justify-center w-full py-2 mt-auto text-sm font-semibold text-white transition-colors bg-black rounded-full hover:bg-gray-800">
                ORDER NOW
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
