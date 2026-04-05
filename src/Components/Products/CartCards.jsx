import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const CartCards = ({
  cards,
  cartProducts,
  setCartProducts,
  product,
  setProduct,
  price,
  setPrice,
}) => {
  console.log(price, setPrice);
  // console.log(cartProducts, "cartProducts");

  const handleCheckout = () => {
  setCartProducts([]);
  setPrice(0);
  toast.success("Order Placed Successfully!");
};

  const handleDeleteBtn = (card) => {
    // console.log(cartProducts, "cartProducts");

    const filteredCards = cartProducts.filter(
      (addedCard) => addedCard.title != card.title,
    );
    // console.log(filteredCards, "filteredCards");
    setCartProducts(filteredCards);
    setPrice((prev) => prev - parseFloat(card.price.replace("$", "")));
    toast.error(`${card.title} Removed from the Cart!`);
  };
  return (
    <div>
      {cartProducts.length === 0 ? (
        <div className="">
          <h2 className="font-bold text-xl mb-5">
            Selected Players ({cartProducts.length}/{cards.length})
          </h2>
          <div className="h-50 w-full flex justify-center items-center text-center flex-col">
            <div className="">
              <IoCartOutline />
            </div>
            <div className="text-gray-500">Browse Product</div>
          </div>
          <div className="flex justify-center">
            <button
              
              onClick={() => setProduct("productButtonClicked")}
              className={`btn ${product === "productButtonClicked" ? " text-white" : "text-white border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} w-[40%] mx-auto rounded-full  text-sm font-medium mb-10`}
            >
              Go To Products Section
            </button>
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
                  <div className="flex items-center gap-5">
                    <img className="h-6" src={card.image_url} />
                    <div>
                      <h3 className="font-medium">{card.title}</h3>
                      <p className="text-gray-500">{card.price}</p>
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
              <p className="text-gray-500">total</p>
              <button className="mb-3 font-bold text-xl"> {price} $</button>
            </div>
            <button
              onClick={handleCheckout}
              className="btn text-white border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full  text-sm font-medium"
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
