// VariantSelector.jsx  (fixed)
import { useState } from "react";
/* ⬇️  change the import to a car icon that exists */
import { FaCarSide } from "react-icons/fa";
import PropTypes from "prop-types";

function VariantSelector({ title = "Variants", variants, onChange }) {
  const [activeId, setActiveId] = useState(variants[0]?.id || "");

  const active = variants.find((v) => v.id === activeId) || variants[0];

  const handleSelect = (id) => {
    setActiveId(id);
    if (onChange) onChange(variants.find((v) => v.id === id));
  };

  return (
    <section className="w-full py-10 mx-auto max-w-7xl">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      {/* main layout */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* ───── variant list ───── */}
        <div className="w-full lg:w-4/12">
          <ul className="space-y-4 max-h-[330px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
            {variants.map((v) => {
              const selected = v.id === activeId;
              return (
                <li
                  key={v.id}
                  onClick={() => handleSelect(v.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-md border cursor-pointer transition
                    ${
                      selected
                        ? "bg-[#004c97] text-white border-[#004c97]"
                        : "bg-white text-[#004c97] border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  {/* use the working icon here */}
                  <FaCarSide
                    className={`text-xl shrink-0 ${
                      selected ? "text-white" : "text-[#004c97]"
                    }`}
                  />
                  <span className="font-medium truncate">{v.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ───── specs grid ───── */}
        <div className="w-full lg:w-8/12">
          <div className="grid grid-cols-2 bg-white divide-x divide-y divide-gray-300">
            {active.specs.map((spec) => (
              <div key={spec.label} className="px-6 py-6">
                <p className="mb-1 text-sm font-medium text-gray-500">
                  {spec.label}
                </p>
                <p className="text-lg font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* PropTypes */
VariantSelector.propTypes = {
  title: PropTypes.string,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      specs: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default VariantSelector;
