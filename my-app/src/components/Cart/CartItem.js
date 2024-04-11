import React from "react";
import { cartElements } from "../../constants";

const CartItem = () => {
  return (
    <div>
      {cartElements.map((item) => (
        <div className="flex m-2 p-2 justify-between">
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <img className="h-10 w-10" src={item.imageUrl} alt="logo"></img>
          <h1>{item.quantity}</h1>
          <button className="bg-red-500 px-3 font-bold text-white rounded-lg shadow-md">X</button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
