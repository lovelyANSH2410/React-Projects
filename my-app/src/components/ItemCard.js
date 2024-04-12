import React, { useContext } from "react";
import { Context } from "./Store/Context";

const ItemCard = () => {
  const { dataList, cartItems, setCartItems, cartCount, setCartCount } =
    useContext(Context);

  const saveToCart = (obj) => {
    const existingItem = cartItems.find((item) => item.id === obj.id);
    if (existingItem) {
      alert("Item already in the cart");
    } else {
      setCartItems([...cartItems, obj]);
      setCartCount(cartCount + 1);
    }
  };

  return dataList.map((item) => (
    <div key={item.id}>
      <div className="w-80 mx-10 hover:scale-105 duration-500">
        <h3 className="text-lg font-semibold py-2 text-center">{item.name}</h3>
        <img className="h-80 w-80" src={item.image_URL} alt="logo"></img>
        <div className="flex justify-between p-2">
          <h3>{item.price}</h3>
          <button
            className="text-white  font-semibold p-2 rounded-md bg-opacity-50 bg-blue-700"
            onClick={() => {
              saveToCart(item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));
};

export default ItemCard;
