import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({cartProducts}) => {
  return (
    <div className="w-full bg-white shadow-sm p-4 ">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700 ">DigiTools</div>

        {/* menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex ">
          <ul className="menu menu-horizontal gap-4 font-medium">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        {/* Navbar- Right (Buttons) */}
        <div className="flex items-center gap-4 md:gap-0.5">
          <div className="relative flex items-center cursor-pointer hover:bg-gray-200 rounded-full">
            <span className="mr-2 " >
              <IoCartOutline />
            </span>
            { cartProducts.length === 0 ? "" : <span className="absolute -top-2 -right-0.5 bg-red-500 text-white text-sm w-4 h-4 rounded-full flex items-center justify-center">
              {cartProducts.length}
            </span>}
          </div>
          <button className="btn btn-ghost rounded-full px-4 hidden md:block ">
            Login
          </button>
          <button  type="button" className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5 py-6 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
