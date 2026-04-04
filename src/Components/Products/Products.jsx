import React, { use, useState } from "react";
import ProductCards from "./ProductCards";
import CartCards from "./CartCards";

const Products = ({ cardsPromise }) => {
  // console.log(cardsPromise);
  const cards = use(cardsPromise);
  // console.log(cards);

  const [product, setProduct] = useState("productButtonClicked");
  // console.log(product, "product", setProduct);

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className="w-[80%] mx-auto">
      <div className="w-full py-16 bg-white">
        <div className="w-[80%] mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Premium Digital Tools
          </h1>

          <p className="text-gray-500 text-sm max-w-md">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <div className="flex items-center mt-2 border border-gray-200 rounded-full ">
            <button
              onClick={() => setProduct("productButtonClicked")}
              className={`btn ${product === "productButtonClicked" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-gray-700 border-none bg-white"}  rounded-full  text-sm font-medium`}
            >
              Products
            </button>
            <button
              onClick={() => setProduct("cartButtonClicked")}
              className={`btn ${product === "cartButtonClicked" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-gray-700 border-none bg-white"}  rounded-full  text-sm font-medium`}
            >
              Cart ({cartProducts.length}/{cards.length})
            </button>
          </div>
        </div>
      </div>
      {product === "productButtonClicked" ? (
        <ProductCards
          cards={cards}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      ) : (
        <CartCards
          cards={cards}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      )}
    </div>
  );
};

export default Products;
