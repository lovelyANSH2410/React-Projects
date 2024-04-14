import React, { useContext, useEffect } from "react";
import { Context } from "../Store/Context";

const CartItem = () => {
  const { cartItems, setCartItems, setCartCount } = useContext(Context);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
      setCartCount(JSON.parse(storedCartItems).length);
    }
  }, [setCartItems, setCartCount]);

  const removeFromCart = (obj) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== obj.id);
    setCartItems(updatedCartItems);
    setCartCount((prevCount) => prevCount - 1);

    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Filter out the item to be removed and update the remaining items in local storage
    const updatedStoredCartItems = storedCartItems.filter(
      (item) => item.id !== obj.id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedStoredCartItems));
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex m-2 p-2 justify-between">
          <h1>{item.name}</h1>
          <h1>${item.price}</h1>
          <img className="h-10 w-10" src={item.image_URL} alt="logo"></img>
          <h1>{}</h1>
          <button
            className="bg-red-500 px-3 font-bold text-white rounded-lg shadow-md hover:bg-opacity-80"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
