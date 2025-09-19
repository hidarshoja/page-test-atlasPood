import React from "react";

export default function AccordionItem({
  number,
  title,
  summary,
  open,
  onOpen,
  children,
  error = false,
}) {
  return (
    <div className="border-b-2 border-white bg-[#ece9e580] px-2">
      <button
        type="button"
        onClick={onOpen}
        className="w-full flex items-center justify-between py-3"
      >
        <span className="flex items-center gap-3">
          {typeof number !== "undefined" ? (
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border text-xs text-gray-700">
              {number}
            </span>
          ) : null}
          <span className="text-sm font-medium text-gray-900">
            {title.includes("(option)") ? (
              <>
                {title.replace(" (option)", "")}
                <span className="text-gray-400 font-normal"> (option)</span>
              </>
            ) : (
              title
            )}
          </span>
        </span>
        {summary ? (
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
            {summary}
          </span>
        ) : error ? (
          <span
            aria-label="incomplete"
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs"
            title="Incomplete"
          >
            !
          </span>
        ) : null}
      </button>
      {open ? (
        <div className="pb-4 text-sm text-gray-700">{children}</div>
      ) : null}
    </div>
  );
}
