import React from "react";

import ItemCard from "./ItemCard";

const Body = () => {
  return (
    <>
      <div className="text-white">
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
