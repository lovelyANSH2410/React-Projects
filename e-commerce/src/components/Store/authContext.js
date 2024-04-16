import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: "",
  user: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);
  const userData = localStorage.getItem("user");
  const [user, setUser] = useState(userData);
  const userIsLoggedIn = !!token;

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logInHandler = (token, email) => {
    setToken(token);
    setUser(email);
    localStorage.setItem("token", token);
    localStorage.setItem("user", email);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue = {
    token: token,
    user: user,
    setUser: setUser,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
