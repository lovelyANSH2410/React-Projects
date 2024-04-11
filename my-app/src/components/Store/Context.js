import { createContext, useState } from "react";
import { data } from "./Data";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [dataList, setDataList] = useState(data);
  const [totalBill, setTotalBill] = useState(0);
  const [cartCount, setCartCount] = useState(null);

  const contextValue = {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    dataList,
    setDataList,
    cartCount,
    setCartCount,
    totalBill,
    setTotalBill,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
