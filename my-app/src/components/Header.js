import React, { useContext } from "react";
import { Context } from "./Store/Context";
import Cart from "./Cart/Cart";
import { bg_img } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  const { showCart, setShowCart, cartCount } = useContext(Context);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <img className="w-full absolute -z-10" src={bg_img} alt="logo"></img>
      <div className="text-white text-2xl p-5 flex justify-evenly">
        <Link to='/' className="border-2 rounded-md border-white px-2 hover:opacity-80">Home</Link>
        <Link to='/store' className="border-2 rounded-md border-white px-2 hover:opacity-80">Store</Link>
        <Link to='/about' className="border-2 rounded-md border-white px-2 hover:opacity-80">About</Link>
        <button
          onClick={toggleCart}
          className="px-3 rounded-md text-lg font-semibold bg-blue-800 hover:bg-opacity-80"
        >
          Cart🛒{cartCount}
        </button>
      </div>
      {showCart && (
        <div className="relative">
          <Cart />
        </div>
      )}
    </>
  );
};

export default Header;
