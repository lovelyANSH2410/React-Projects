import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-white text-2xl bg-black p-5 flex justify-evenly">
        <div>Home</div>
        <div>Store</div>
        <div>About</div>
      </div>
      <h1 className="text-6xl text-center text-white p-10 font-bold bg-gray-400">
        The Generics
      </h1>
    </>
  );
};

export default Header;
