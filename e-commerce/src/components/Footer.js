import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fixed w-full text-white flex justify-around pt-5 md:pt-10 py-2 md:py-4 text-center bottom-0 bg-black bg-opacity-50">
        <h1 className="text-lg md:text-3xl font-semibold">space X collection</h1>
        <div className="flex text-sm md:text-lg font-semibold">
            <h1 className="m-2">Instagram</h1>
            <h1 className="m-2">Facebook</h1>
            <h1 className="m-2">LinkedIn</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
