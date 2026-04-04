import React from "react";

const ProductCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
      {cards.map((card) => {
        console.log(card);
        return (
          <div className="Card">
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <span className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full">
                {card.badge}
              </span>

              <div className="w-15 h-15 border border-gray-200 rounded-full flex items-center justify-center mb-4">
                <img src={card.image_url} alt="" />
              </div>

              <h2 className="text-gray-900 font-semibold text-lg mb-1">
                {card.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4 leading-snug">
                {card.description}
              </p>

              <div className="mb-4">
                <span className="text-gray-900 text-3xl font-bold">{card.price}</span>
                <span className="text-gray-400 text-sm">/{card.billing_cycle}</span>
              </div>

              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-400 font-bold text-base">✓</span>
                  {card.features[0]}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-400 font-bold text-base">✓</span>
                  {card.features[1]}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-400 font-bold text-base">✓</span>
                  {card.features[2]}
                </p>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-3 rounded-xl duration-300">
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
