import React from "react";

function Products() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="w-[80%] mx-auto flex flex-col items-center text-center gap-4">

        <h1 className="text-4xl font-bold text-gray-900">Premium Digital Tools</h1>

        <p className="text-gray-500 text-sm max-w-md">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <button className="px-6 py-2 rounded-full text-white text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Products
          </button>
          <button className="text-gray-700 text-sm font-medium">
            Cart (2)
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;