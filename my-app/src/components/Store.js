import React from "react";
import ItemCard from "./ItemCard";

const Store = () => {
  return (
    <div className="text-white mb-40">
      <h1 className="text-3xl text-center my-10">X Collection</h1>
      <div className="flex m-auto justify-center p-2 w-[50%] flex-wrap">
          <ItemCard />
      </div>
    </div>
  );
};

export default Store;
