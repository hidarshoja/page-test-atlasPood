import React, { useMemo, useState, useEffect } from "react";

function formatTomans(value) {
  try {
    return new Intl.NumberFormat("fa-IR").format(value) + " Tomans";
  } catch {
    return value + " Tomans";
  }
}

export default function CartPage() {
  const initialCart = useMemo(() => {
    const raw = localStorage.getItem("cart");
    try {
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }, []);

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const productTotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const removeItem = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  if (!cart.length) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-xl font-semibold">Shopping Bag (0)</h1>
        <p className="text-gray-600 mt-4">Your bag is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-xl font-semibold">Shopping Bag ({cart.length})</h1>

      <div className="mt-6 bg-white border rounded">
        {cart.map((item) => (
          <div
            key={item.id}
            className="p-4 border-b last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            <div className="md:col-span-2 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-cover rounded"
              />
              <button
                aria-label="Remove item"
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-black/70 text-white text-xs"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </div>
            <div className="md:col-span-7">
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">
                Custom Grommet Drapery
              </div>
              <div className="text-sm text-gray-700 mt-3 flex flex-wrap gap-x-6 gap-y-1">
                <span>Width: {item.width}cm</span>
                <span>Height: {item.height}cm</span>
                <span>Mount: {item.mount}</span>
                <span>Material & Color: {item.fabric}</span>
                <span>
                  Lining: {item.lining?.length ? item.lining.join(", ") : "-"}
                </span>
                <span>Panel Coverage: {item.panelCoverage || "-"}</span>
                <span>Panel Type: {item.panelType || "-"}</span>
                <span>Grommet: {item.grommetFinish || "-"}</span>
                <span>Hardware: {item.hardware || "-"}</span>
                <span>
                  Accessories:{" "}
                  {item.accessories?.length ? item.accessories.join(", ") : "-"}
                </span>
              </div>
            </div>
            <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between gap-3">
              <div className="font-semibold">
                {formatTomans(item.price || 0)}
              </div>
              <div className="text-sm text-gray-500">Qty: 1</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 border rounded p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">Product Total</div>
          <div className="font-medium">{formatTomans(productTotal)}</div>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="text-gray-600">Shipping</div>
          <div className="font-medium">FREE</div>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="text-gray-600">Subtotal</div>
          <div className="font-medium">{formatTomans(productTotal)}</div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="flex-1 bg-[#49443e] text-white rounded py-2 text-sm">
            CHECKOUT NOW
          </button>
          <button className="flex-1 border rounded py-2 text-sm">
            ORDER QUOTATION
          </button>
        </div>
      </div>
    </div>
  );
}
