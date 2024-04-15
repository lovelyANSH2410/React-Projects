import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

const Header = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div>
      <div className="bg-green-400 flex justify-around  text-center font-bold text-white p-10">
        <h1 className="text-6xl">Blog App</h1>
        <button
          className="text-xl bg-green-500 border-2 border-green-700 p-4 rounded-md"
          onClick={handleForm}
        >
          {!openForm ? "New Blog" : "Close"}
        </button>
      </div>
      {openForm && <Input handleForm={handleForm} />}
      <div className="bg-green-100 h-full w-full">
        <Output />
      </div>
    </div>
  );
};

export default Header;
