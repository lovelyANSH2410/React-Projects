import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [singIn, setSignIn] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const pass = useRef(null);
  const confirmpass = useRef(null);

  useEffect(() => {
    if (errMsg) {
      const timer = setTimeout(() => {
        setErrMsg(null);
      }, 4000);

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
          console.log(data.idToken);
          localStorage.setItem("idToken", data.idToken);
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
        const response = fetch(
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

  const toggle = () => {
    setSignIn(!singIn);
  };

  return (
    <div className="w-1/4 h-auto mx-auto border bg-white border-gray-300 mt-40 text-center">
      <h1 className="text-2xl py-8 font-semibold text-center">
        {!singIn ? "Sign up" : "Login"}
      </h1>
      <p className="text-lg py-1 text-red-500">{errMsg}</p>
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
            ref={confirmpass}
          />
        )}
        <button className="bg-blue-500 rounded-3xl font-semibold text-white p-2 shadow-md">
          {!singIn ? "Sign up" : "Login"}
        </button>
      </form>
      <button className="my-10 font-semibold" onClick={toggle}>
        {!singIn ? "Have an account? Login" : "New user? Sign up"}
      </button>
    </div>
  );
};

export default Login;
