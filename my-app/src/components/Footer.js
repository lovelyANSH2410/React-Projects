import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fixed w-full text-white flex justify-around pt-10 py-4 text-center bottom-0 bg-black bg-opacity-50">
        <h1 className="text-3xl font-semibold">The Generics</h1>
        <div className="flex text-lg font-semibold">
            <h1 className="m-2">Instagram</h1>
            <h1 className="m-2">Facebook</h1>
            <h1 className="m-2">LinkedIn</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
