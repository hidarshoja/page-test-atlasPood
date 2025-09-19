import React from "react";

export default function ReviewDrawer({ open, onClose, summary }) {
  return (
    <div
      className={`fixed inset-0 z-40 ${
        open ? "block" : "pointer-events-none"
      } `}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[520px] bg-white shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-base font-semibold">Review Order</h3>
          <button className="text-gray-500" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="p-5 space-y-6 text-sm">
          <div>
            <h4 className="text-xs uppercase text-gray-500">
              Custom Grommet Drapery
            </h4>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="border rounded p-3 text-center">
                <div className="text-xs text-gray-500">Width</div>
                <div className="mt-1 font-semibold">
                  {summary.width || "-"}CM
                </div>
              </div>
              <div className="border rounded p-3 text-center">
                <div className="text-xs text-gray-500">Height</div>
                <div className="mt-1 font-semibold">
                  {summary.height || "-"}CM
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase text-gray-500">General Details</h4>
            <div className="mt-2 grid grid-cols-2 gap-y-2">
              <div className="text-gray-500">Mount Position</div>
              <div className="font-medium capitalize">
                {summary.mount || "-"}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase text-gray-500">Drapery</h4>
            <div className="mt-2 grid grid-cols-2 gap-y-2">
              <div className="text-gray-500">Material & Color</div>
              <div className="font-medium">{summary.fabric}</div>
              <div className="text-gray-500">Lining</div>
              <div className="font-medium">
                {summary.lining?.length ? summary.lining.join(", ") : "-"}
              </div>
              <div className="text-gray-500">Panel Coverage</div>
              <div className="font-medium capitalize">
                {summary.panelCoverage || "-"}
              </div>
              <div className="text-gray-500">Panel Type</div>
              <div className="font-medium capitalize">
                {summary.panelType || "-"}
              </div>
              <div className="text-gray-500">Grommet Finish</div>
              <div className="font-medium capitalize">
                {summary.grommetFinish || "-"}
              </div>
              <div className="text-gray-500">Hardware</div>
              <div className="font-medium capitalize">
                {summary.hardware || "-"}
              </div>
              <div className="text-gray-500">Accessories</div>
              <div className="font-medium capitalize">
                {summary.accessories?.length
                  ? summary.accessories.join(", ")
                  : "-"}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" className="mt-0.5" />I understand special
              orders begin production immediately upon order placement and are
              built to my specifications.
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              className="flex-1 bg-[#49443e] text-white rounded py-2 text-sm"
              onClick={summary.onAgree}
            >
              AGREE & ADD TO BAG
            </button>
            <button
              className="flex-1 border rounded py-2 text-sm"
              onClick={onClose}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

