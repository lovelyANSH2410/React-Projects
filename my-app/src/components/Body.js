import React from "react";
import { album_img } from "../constants";

const Body = () => {
  return (
    <>
      <h1 className="text-3xl text-center p-10 font-semibold">Music</h1>
      <div className="flex m-auto justify-center p-2 w-[50%] flex-wrap">
        <div className="w-80 mx-10">
          <h3 className="text-lg font-semibold py-2 text-center">Album 1</h3>
          <img className="h-80 w-80" src={album_img} alt="logo"></img>
          <div className="flex justify-between p-2">
            <h3>$12.99</h3>
            <button className="text-white bg-black font-semibold p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-80 mx-10">
          <h3 className="text-lg font-semibold py-2 text-center">Album 2</h3>
          <img className="h-80 w-80" src={album_img} alt="logo"></img>
          <div className="flex justify-between p-2">
            <h3>$12.99</h3>
            <button className="text-white bg-black font-semibold p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-80 mx-10">
          <h3 className="text-lg font-semibold py-2 text-center">Album 3</h3>
          <img className="h-80 w-80" src={album_img} alt="logo"></img>
          <div className="flex justify-between p-2">
            <h3>$12.99</h3>
            <button className="text-white bg-black font-semibold p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-80 mx-10">
          <h3 className="text-lg font-semibold py-2 text-center">Album 4</h3>
          <img className="h-80 w-80" src={album_img} alt="logo"></img>
          <div className="flex justify-between p-2">
            <h3>$12.99</h3>
            <button className="text-white bg-black font-semibold p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
