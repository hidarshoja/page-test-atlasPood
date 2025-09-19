import React from "react";

export default function StepGrommetFinish({
  options = ["black", "brass", "nickel"],
  value,
  onChange,
  onNext,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 capitalize">
            <input
              type="radio"
              name="grommetFinish"
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
            />
            {opt}
          </label>
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

