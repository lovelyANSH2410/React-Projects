import React, { useContext, useEffect } from "react";
import { Context } from "../Store/Context";
import AuthContext from "../Store/authContext";

const CartItem = () => {
  const { cartItems, setCartItems, setCartCount } = useContext(Context);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const storedCartItems = localStorage.getItem(user);
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
          setCartCount(JSON.parse(storedCartItems).length);
        }
      }
    };

    fetchData(); // Call the async function

    // Ensure useEffect runs only when user is set
  }, [setCartItems, setCartCount, user]);

  const removeFromCart = (obj) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== obj.id);
    setCartItems(updatedCartItems);
    setCartCount((prevCount) => prevCount - 1);

    const storedCartItems = JSON.parse(localStorage.getItem(user)) || [];

    const updatedStoredCartItems = storedCartItems.filter(
      (item) => item.id !== obj.id
    );
    localStorage.setItem(user, JSON.stringify(updatedStoredCartItems));
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
