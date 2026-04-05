import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ card, cartProducts, setCartProducts, price, setPrice }) => {
  console.log(price);

  const handleBtn = () => {
    
    if (isAdded) return;
    setIsAdded(true);
    addButtonHandle();
    setPrice(prev => prev + parseFloat(card.price.replace("$", "")));
  };

  // console.log(cartProducts, setCartProducts)
  const [isAdded, setIsAdded] = useState(false);
  const addButtonHandle = () => {
    if (isAdded === false) {
      toast(`~ ${card.title} Added to the Cart ~`);
      setCartProducts([...cartProducts, card]);
    } else {
      return;
    }
  };
  return (
    <div className="Card transition-all duration-300 hover:-translate-y-2">
      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ">
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

        <button
          onClick={handleBtn}
          className={` ${isAdded === false ? "bg-purple-700 hover:bg-purple-600" : "bg-green-700 hover:bg-green-600"}  text-white text-sm font-semibold py-3 rounded-xl duration-300 w-full`}
        >
          {isAdded ? " ✓ Added To Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default Card;
