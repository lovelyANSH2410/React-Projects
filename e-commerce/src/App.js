import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ContextProvider } from "./components/Store/Context";
import { useContext } from "react";
import AuthContext from "./components/Store/authContext";
import Login from "./components/Login";

function App() {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <ContextProvider>
      <Header />
      {!isLoggedIn ? <Login /> :  <Outlet />}
      <Footer />
    </ContextProvider>
  );
}

export default App;
