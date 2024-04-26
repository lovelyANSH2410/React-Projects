import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const [singIn, setSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState(false);

  const email = useRef(null);
  const pass = useRef(null);
  const confirmpass = useRef(null);

  const matchPassword = () => {
    if (pass.current.value === confirmpass.current.value) {
      setErrMsg("Password Matched!");
    }
  };

  useEffect(() => {
    if (errMsg) {
      const timer = setTimeout(() => {
        setErrMsg(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = pass.current.value;

    if (singIn) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD66jURNjlpKIlniFkfom3AFtWFiTeWF0w",
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
        if (response.ok) {
          const data = await response.json();
          const idToken = data.idToken;
          localStorage.setItem("idToken", idToken);
          dispatch(login({ tokenID: idToken, userID: enteredEmail }));
          localStorage.setItem("user", enteredEmail);
          navigate("/home");
        } else {
          const data = await response.json();
          setErrMsg(data.error.message);
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD66jURNjlpKIlniFkfom3AFtWFiTeWF0w",
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
        if (response.ok) {
          //
        } else {
          const data = await response.json();
          setErrMsg(data.error.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const enteredEmail = email.current.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD66jURNjlpKIlniFkfom3AFtWFiTeWF0w",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            requestType: "PASSWORD_RESET",
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Password reset link has been sent to you email.");
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const toggle = () => {
    setSignIn(!singIn);
  };

  const forgotPasswordToggle = () => {
    setForgotPassword(!forgotPassword);
  };

  return (
    <>
      {!forgotPassword ? (
        <div className="w-1/4 h-auto mx-auto border bg-white border-gray-300 mt-40 text-center">
          <h1 className="text-2xl py-8 font-semibold text-center">
            {!singIn ? "Sign up" : "Login"}
          </h1>
          <p className="text-lg py-1 font-semibold text-red-500">{errMsg}</p>
          <form
            className="flex justify-center flex-col w-[70%]  mx-auto space-y-4"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Email"
              type="email"
              ref={email}
            />
            <input
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Password"
              type="password"
              ref={pass}
            />
            {!singIn && (
              <input
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Confirm password"
                onChange={matchPassword}
                ref={confirmpass}
              />
            )}
            <button className="bg-blue-500 rounded-3xl font-semibold text-white p-2 shadow-md">
              {!singIn ? "Sign up" : "Login"}
            </button>
          </form>
          <button className="my-6 font-semibold" onClick={toggle}>
            {!singIn ? "Have an account? Login" : "New user? Sign up"}
          </button>
          <div className="pb-10 font-semibold text-red-500">
            <Link onClick={forgotPasswordToggle}>Forgot password?</Link>
          </div>
        </div>
      ) : (
        <div className="w-1/4 h-auto mx-auto border bg-white border-gray-300 mt-40 text-center">
          <form
            className="flex justify-center pt-10 flex-col w-[70%] mx-auto space-y-4"
            onSubmit={(e) => {
              handleForgotPassword(e);
            }}
          >
            <input
              className="border border-gray-400 p-2 rounded-md"
              placeholder="Email"
              type="email"
              ref={email}
            />
            <button className="bg-blue-500 rounded-3xl font-semibold text-white p-2 shadow-md">
              Set Password
            </button>
          </form>
          <div className="py-5 font-semibold text-red-500">
            <Link onClick={forgotPasswordToggle}>
              Alread set password? Login now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
