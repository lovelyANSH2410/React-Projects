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
      <img className="fixed -z-10 object-cover h-full md:h-auto md:object-cover" src={bg_img} alt="logo"></img>
      <div className="text-white text-2xl p-5 flex justify-evenly w-[70%] m-auto">
        <Link to='/' className="border  border-white px-2 hover:opacity-80">Home</Link>
        <Link to='/store' className="border  border-white px-2 hover:opacity-80">Store</Link>
        <Link to='/about' className="border border-white px-2 hover:opacity-80">About</Link>
        <Link to='/contactus' className="border border-white px-2 hover:opacity-80">Contact Us</Link>
        <Link to='/movie' className="border border-white px-2 hover:opacity-80">Movies</Link>
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
