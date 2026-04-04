import React from "react";
import Card from "../UI1/Card";

const ProductCards = ({ cards, cartProducts, setCartProducts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
      {cards.map((card, ind) => {
        // console.log(card);
        return (
          <Card
            key={ind}
            card={card}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        );
      })}
    </div>
  );
};

export default ProductCards;
