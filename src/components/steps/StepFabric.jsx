import React from "react";

export default function StepFabric({ options, onSelect, onNext }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {options.map((opt) => (
          <button
            key={opt.name}
            type="button"
            onClick={() => onSelect(opt)}
            className={`border rounded overflow-hidden w-[150px] h-[150px] mx-auto`}
          >
            <img
              src={opt.image}
              alt={opt.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="mt-4 flex item-center justify-end">
        <button
          className="bg-[#49443e] text-white rounded px-4 py-2 text-sm"
          onClick={onNext}
        >
          NEXT STEP
        </button>
      </div>
    </>
  );
}

