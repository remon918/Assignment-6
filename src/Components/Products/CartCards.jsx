import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartCards = ({ cards, cartProducts, setCartProducts, product, setProduct }) => {
  // console.log(cartProducts, "cartProducts");
  const handleDeleteBtn = (card) => {
    // console.log(cartProducts, "cartProducts");
    const filteredCards = cartProducts.filter(
      (addedCard) => addedCard.title != card.title,
    );
    // console.log(filteredCards, "filteredCards");
    setCartProducts(filteredCards);
  };
  return (
    <div>
      {cartProducts.length === 0 ? (
        <div className="">
          <h2 className="font-bold text-xl mb-5">
            Selected Players ({cartProducts.length}/{cards.length})
          </h2>
          <div className="h-70 w-full flex justify-center items-center text-center flex-col">
            <div className="">
              <IoCartOutline />
            </div>
            <div className="text-gray-500">Browse Product</div>
          </div>
        </div>
      ) : (
        <div className="">
          <h2 className="font-bold text-xl mb-5">
            Selected Players ({cartProducts.length}/{cards.length})
          </h2>
          {cartProducts.map((card, ind) => {
            return (
              <div key={ind}>
                <div className="flex justify-between items-center bg-base-200 p-3 rounded-md mb-3">
                  <div className="flex items-center gap-3">
                    <img src={card.image_url} alt="" />
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteBtn(card)}
                    className="btn border-none rounded-full text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="">
            <div className="flex justify-between">
              <p>total</p>
              <button className="mb-3">$</button>
            </div>
            <button
              onClick={() => setProduct("productButtonClicked")}
              className={`btn ${product === "productButtonClicked" ? " text-white" : "text-white border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} w-full rounded-full  text-sm font-medium`}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCards;
