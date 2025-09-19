import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// تصاویر در پوشه public قرار دارند و مستقیماً با مسیر ریشه قابل دسترسی‌اند
// sheer.webp, sheer2.webp, sheer3.webp

const products = [
  {
    title: "Velvet Double European Pleat",
    priceText: "719,000 - 1,019,000 Tomans",
    colors: [
      { name: "Rose", image: "/sheer.webp", swatch: "#e8d3cf" },
      { name: "Grey", image: "/sheer2.webp", swatch: "#9aa0a6" },
      { name: "Navy", image: "/sheer3.webp", swatch: "#243447" },
    ],
  },
];

export default function FabricPage() {
  const [productIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const navigate = useNavigate();

  const product = products[productIndex];
  const currentColor = product.colors[colorIndex];

  const goPrev = () => {
    const total = product.colors.length;
    const prevColor = (colorIndex - 1 + total) % total;
    setColorIndex(prevColor);
  };

  const goNext = () => {
    const total = product.colors.length;
    const nextColor = (colorIndex + 1) % total;
    setColorIndex(nextColor);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <button
          type="button"
          onClick={() =>
            navigate(`/fabric/${productIndex}`, {
              state: {
                image: currentColor.image,
                title: product.title,
                priceText: product.priceText,
                colorName: currentColor.name,
              },
            })
          }
          className="block w-full text-left"
        >
          <img
            src={currentColor.image}
            alt={`${product.title} - ${currentColor.name}`}
            className="w-full rounded-lg object-cover"
          />
        </button>

        {/* دکمه‌های اسلایدر */}
        <button
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow"
        >
          ›
        </button>
      </div>

      {/* سواچ رنگ‌ها */}
      <div className="flex items-center gap-3 mt-4">
        {product.colors.map((c, idx) => (
          <button
            key={c.name}
            onClick={() => setColorIndex(idx)}
            aria-label={c.name}
            className={`w-7 h-7 rounded-full border ${
              idx === colorIndex
                ? "ring-2 ring-blue-600 border-blue-600"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: c.swatch }}
          />
        ))}
      </div>

      {/* عنوان و قیمت */}
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{product.priceText}</p>
      </div>
    </div>
  );
}
