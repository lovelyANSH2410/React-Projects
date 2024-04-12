import React, { useContext, useEffect } from "react";
import { Context } from "../Store/Context";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems, setShowCart, setTotalBill, totalBill } =
    useContext(Context);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setTotalBill(totalPrice);
  });

  return (
    <div className="w-[80%] z-20 md:w-[20%] text-white bg-gray-900 shadow-lg md:bg-opacity-70 rounded-xl h-auto md:h-auto absolute top-0 md:top-5 left-0 md:left-2/3 ml-10  md:ml-16">
      <div className="flex justify-between p-6 font-semibold text-xl">
        <div>Cart</div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="  border-white border-solid border-2 px-3 rounded-lg"
        >
          X
        </button>
      </div>
      <div className="text-center">
        <div className="p-2 font-semibold text-lg border-b-2 border-white">
          Items
        </div>
        <CartItem />
        <div className="p-2 font-semibold text-lg">Total Price:{totalBill}</div>
        <button
          onClick={() => alert("Order Placed!")}
          className="px-10 py-2 font-semibold text-lg text-white bg-blue-700 rounded-lg mb-2"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
