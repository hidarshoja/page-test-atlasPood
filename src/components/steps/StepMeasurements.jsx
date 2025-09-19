import React from "react";

export default function StepMeasurements({
  mode,
  width,
  height,
  onModeChange,
  onWidthChange,
  onHeightChange,
  onNext,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="measureMode"
              value="have"
              checked={mode === "have"}
              onChange={(e) => onModeChange(e.target.value)}
            />
            I have my own measurements.
          </label>
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="measureMode"
              value="calc"
              checked={mode === "calc"}
              onChange={(e) => onModeChange(e.target.value)}
            />
            Calculate my measurements.
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <div className="text-xs text-gray-600 mb-1">Width</div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              value={width}
              onChange={(e) => onWidthChange(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-sm text-gray-500">cm</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Height</div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-sm text-gray-500">cm</span>
          </div>
        </div>
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

