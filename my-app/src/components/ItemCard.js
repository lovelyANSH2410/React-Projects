import React, { useContext } from "react";
import { Context } from "./Store/Context";
import { Link } from "react-router-dom";

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
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, obj]));
    }
  };

  return dataList.map((item) => (
    <div key={item.id}>
      <div className="w-60 md:w-80 mx-10 hover:scale-105 duration-500">
        <h3 className="text-lg font-semibold py-2 text-center">{item.name}</h3>
        <Link to={`/product/${item.id}`}>
          <img
            className="h-60 md:h-80 w-80 rounded-3xl opacity-80"
            src={item.image_URL}
            alt="logo"
          ></img>
        </Link>
        <div className="flex justify-between p-2">
          <h3 className="text-lg font-bold">${item.price}</h3>
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
