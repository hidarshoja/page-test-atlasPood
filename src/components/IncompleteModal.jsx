import React from "react";

export default function IncompleteModal({ missingSteps = [], onClose }) {
  if (!missingSteps.length) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-50">
      <div className="bg-white rounded-lg shadow max-w-lg w-full">
        <div className="px-5 py-4 border-b">
          <h3 className="text-base font-semibold">
            Please complete the following:
          </h3>
        </div>
        <div className="p-5">
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            {missingSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end">
            <button
              className="bg-[#49443e] text-white rounded px-4 py-2 text-sm"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

