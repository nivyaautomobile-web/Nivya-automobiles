import { useState } from "react";

const PriceSection = ({ variants = [], city = "Hyderabad" }) => {
  const [selected, setSelected] = useState(variants[0]);

  return (
    <div
      className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-cover bg-center py-10 text-white"
    >
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto text-center md:grid-cols-3 md:text-left">
        {/* Select Variant */}
        <div>
          <label className="block mb-2 text-sm font-medium">SELECT CAR VARIANT</label>
          <select
            value={selected?.variant}
            onChange={(e) =>
              setSelected(variants.find((v) => v.variant === e.target.value))
            }
            className="w-full px-4 py-2 text-black bg-white rounded-md shadow-md focus:outline-none"
          >
            {variants.map((v) => (
              <option key={v.variant} value={v.variant}>
                {v.variant}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="self-center">
          <h2 className="text-3xl font-extrabold">
            ₹ {selected?.exShowroom || "--"}
            <span className="text-lg align-top">*</span>
          </h2>
          <p className="mt-1 text-sm">Ex-Showroom Price – {city}</p>
          <p className="mt-1 text-xs opacity-80">
            *Alpha+ & Zeta+ are applicable only for Direct Injection engine with Smart Hybrid
          </p>
        </div>

        {/* Loan Offer */}
        <div className="self-center text-center md:text-right">
          <p className="mb-2 text-sm">You might have pre-approved loan offers</p>
          <button className="px-5 py-2 font-semibold text-black transition bg-white rounded-md hover:bg-gray-200">
            CHECK FOR LOAN OFFERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
