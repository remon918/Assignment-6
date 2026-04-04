import React, { use } from "react";
import ProductCards from "./ProductCards";

const Cards = ({ cardsPromise }) => {
  // console.log(cardsPromise);
  const cards = use(cardsPromise);
  console.log(cards);
  return (
    <div className="w-[80%] mx-auto">
      
      <ProductCards cards={cards} />
    </div>
  );
};

export default Cards;
