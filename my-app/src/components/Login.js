import React, { useState, useRef, useContext, useEffect } from "react";
import { bg_img } from "../constants";
import AuthContext from "./Store/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMsg]);

  const handleButtonClick = async (event) => {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = password.current.value;
    setIsLoading(true);

    if (isSignInForm) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8cZBbUFAN7z96zrU7MlH8uW8qLG5NEjI",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPass,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        setIsLoading(false);
        if (response.ok) {
          const data = await response.json();
          authCtx.login(data.idToken, enteredEmail);
          navigate("/home")
        } else {
          const data = await response.json();
          setErrorMsg(data.error.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8cZBbUFAN7z96zrU7MlH8uW8qLG5NEjI",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPass,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        setIsLoading(false);
        if (response.ok) {
          //
        } else {
          const data = await response.json();
          setErrorMsg(data.error.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <img
          className="brightness-50 h-screen object-cover md:h-auto md:object-cover"
          src={bg_img}
          alt="body"
        />
      </div>
      <img
        className="w-96 -mt-20 object-cover absolute"
        src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg"
        alt="logo"
      ></img>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col bg-black w-96 md:w-3/12 my-28 p-10 mx-auto right-0 left-0 text-white bg-opacity-70"
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-600 ml-4 font-semibold">{errorMsg}
        </p>
        <input
          type="text"
          ref={email}
          placeholder="Email or phone number"
          className="p-4 m-4 bg-gray-900 bg-opacity-35 border border-white"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-4 bg-gray-800 bg-opacity-35 border border-white"
        ></input>
        {!isLoading && (
          <button
            type="submit"
            className="p-3 my-8 mx-4 bg-blue-800 font-bold rounded-md shadow-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        )}
        {isLoading && (
          <button
            type="submit"
            className="p-3 my-8 mx-4 bg-blue-800 font-bold rounded-md shadow-md"
            onClick={handleButtonClick}
          >
            Sending Request
          </button>
        )}
        <p className="mx-auto">Forgot password?</p>
        <p
          className="mx-auto my-10 cursor-pointer font-bold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New user? Sign up now."
            : "Alread a user? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
