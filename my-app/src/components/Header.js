import React, { useContext } from "react";
import { Context } from "./Store/Context";
import Cart from "./Cart/Cart";

const Header = () => {
  const { showCart, setShowCart } = useContext(Context);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div className="text-white text-2xl bg-black p-5 flex justify-evenly">
        <div>Home</div>
        <div>Store</div>
        <div>About</div>
        <button
          onClick={toggleCart}
          className="px-3 rounded-md text-lg font-semibold bg-blue-800"
        >
          Cart
        </button>
      </div>
      {showCart && (
        <div className="relative">
          <Cart />
        </div>
      )}
      <h1 className="text-6xl text-center text-white p-10 font-bold bg-gray-400">
        The Generics
      </h1>
    </>
  );
};

export default Header;
