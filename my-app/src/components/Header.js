import React, { useContext, useEffect } from "react";
import { Context } from "./Store/Context";
import Cart from "./Cart/Cart";
import { bg_img } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./Store/authContext";

const Header = () => {
  const { showCart, setShowCart, cartCount } = useContext(Context);
  const { isLoggedIn } = useContext(AuthContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    authCtx.logout();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      authCtx.logout();
      navigate("/", { replace: true });
    }, 300000);
    return () => clearTimeout(timer);
  }, [authCtx, navigate]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <img
        className="fixed -z-10 object-cover h-full md:h-auto md:object-cover"
        src={bg_img}
        alt="logo"
      ></img>
      {isLoggedIn && (
        <div>
          <div className="text-white text-2xl p-5 flex justify-evenly w-[70%] m-auto">
            <Link
              to="/home"
              className="border  border-white px-2 hover:opacity-80"
            >
              Home
            </Link>
            <Link
              to="/store"
              className="border  border-white px-2 hover:opacity-80"
            >
              Store
            </Link>
            <Link
              to="/about"
              className="border border-white px-2 hover:opacity-80"
            >
              About
            </Link>
            <Link
              to="/contactus"
              className="border border-white px-2 hover:opacity-80"
            >
              Contact Us
            </Link>
            <Link
              to="/movie"
              className="border border-white px-2 hover:opacity-80"
            >
              Movies
            </Link>
            <button
              onClick={toggleCart}
              className="border border-white px-2 hover:opacity-80"
            >
              Cart🛒{cartCount}
            </button>
            <button
              className="px-3 rounded-md text-lg text-white font-semibold bg-blue-800 hover:bg-opacity-80"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
          {showCart && (
            <div className="relative">
              <Cart />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
