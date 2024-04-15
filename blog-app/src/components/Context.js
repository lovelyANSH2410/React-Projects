import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [blog, setBlog] = useState();

  const contextValue = {
    blog: blog,
    setBlog: setBlog,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
