import React, { useContext } from "react";
import { Context } from "./Store/Context";
import Cart from "./Cart/Cart";
import { bg_img } from "../constants";

const Header = () => {
  const { showCart, setShowCart, cartCount } = useContext(Context);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <img className="w-full fixed -z-10" src={bg_img} alt="logo"></img>
      <div className="text-white text-2xl p-5 flex justify-evenly">
        <div>Home</div>
        <div>Store</div>
        <div>About</div>
        <button
          onClick={toggleCart}
          className="px-3 rounded-md text-lg font-semibold bg-blue-800"
        >
          Cart🛒{cartCount}
        </button>
      </div>
      {showCart && (
        <div className="relative">
          <Cart />
        </div>
      )}
      <div className="border border-white p-10 w-[50%] m-auto mt-40">
        <h1 className="text-8xl text-center text-white font-bold">
          The Generics
        </h1>
        <h2 className="text-white text-center text-xl pt-10">
          India's No. 1 E-commerce Store
        </h2>
      </div>
    </>
  );
};

export default Header;
