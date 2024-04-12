import React from "react";
import ItemCard from "./ItemCard";

const Body = () => {
  return (
    <>
      <div className="text-white">
        <div className="border border-white p-32 w-[60%] m-auto mt-40">
          <h1 className="text-8xl text-center text-white font-bold">Space X</h1>
          <h2 className="text-white text-center text-3xl pt-10">
            Worlds's No. 1 Space Agency
          </h2>
        </div>
        <h1 className="text-3xl text-center p-10 mt-20 text-white font-semibold">
          Music
        </h1>
        <div className="flex m-auto justify-center p-2 w-[50%] flex-wrap">
          <ItemCard />
        </div>
      </div>
    </>
  );
};

export default Body;
