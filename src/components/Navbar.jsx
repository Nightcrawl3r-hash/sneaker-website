import React from "react";
import { NavLink } from "react-router-dom";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div>
      <div className="container m-auto">
        <div className="grid grid-cols-4 gap- 2  items-center ">
          <div className="">
            <NavLink
              to="/"
              className="text-3xl text-orange-600 font-thin"
              style={{ fontFamily: "Agbalumo" }}
            >
              <span className="flex items-center"><img src='https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/00379_new_watercolor_shoes_logo-02.png' className="w-12" alt="logo"/>TrendyHub</span>
            </NavLink>
          </div>
          <div className="col-span-2">
            <ul className="flex flex-row justify-center items-center gap-x-20 uppercase text-gray-800">
              <li>
                <NavLink to="home">Home</NavLink>
              </li>
              <li>
                <NavLink to="categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="products">Products</NavLink>
              </li>
              <li>
                <NavLink to="sale">Sale</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center  gap-x-8">
            <NavLink to="wishlist">
              <CiHeart size={24} />
            </NavLink>
            <NavLink to="cart">
              <CiShoppingCart size={24} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
