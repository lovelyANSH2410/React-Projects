import React, { useState } from "react";
import Profile from "./Profile";

const Header = () => {
  const [profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div>
      <div className="flex bg-white justify-evenly text-xl shadow-md w-full font-medium">
        <div className="flex w-1/4 justify-evenly py-10">
          <h1>Home</h1>
          <h1>Products</h1>
          <h1>About us</h1>
        </div>
        <h1 className="text-lg text-center m-4 p-4">
          Your profile is incomplete.{" "}
          <button
            onClick={handleProfile}
            className="text-blue-500 font-semibold"
          >
            Complete Now.
          </button>
        </h1>
      </div>
      {profile && <Profile />}
    </div>
  );
};

export default Header;
