import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
import Store from "./components/Store";
import Movie from "./components/Movie";
import ContactUS from "./components/ContactUS";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import { AuthContextProvider } from "./components/Store/authContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Body /> },
      { path: "/store", element: <Store /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUS /> },
      { path: "/movie", element: <Movie /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <RouterProvider router={appRouter}></RouterProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
