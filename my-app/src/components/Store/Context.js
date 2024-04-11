import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const contextValue = {
    showCart,
    setShowCart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
