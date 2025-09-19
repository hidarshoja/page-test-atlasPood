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
    <div className="border-b-2 border-white bg-[#ece9e580]">
      <button
        type="button"
        onClick={onOpen}
        className="w-full flex items-center justify-between py-3"
      >
        <span className="flex items-center gap-3 pl-1">
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
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide pr-1">
            {summary}
          </span>
        ) : error ? (
          <div className="stepRequired" />
        ) : null}
      </button>
      {open ? (
        <div className=" text-sm text-gray-700 bg-white p-2">{children}</div>
      ) : null}
    </div>
  );
}
