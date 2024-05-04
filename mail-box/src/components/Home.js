import React from "react";
import { bg_img } from "../utils/Constants";
import Dashboard from "./Dashboard";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen">
      <img
        src={bg_img}
        alt="bg"
        className="fixed object-cover w-full h-screen -z-20"
      />
      <div className="fixed text-center w-40 mx-auto">
        <div className="w-28 flex flex-col text-white h-screen space-y-5 px-10 pt-28 bg-white bg-opacity-10">
          <button>📩Mail</button>
          <button>🗨️Chat</button>
          <button>🎦Meet</button>
        </div>
      </div>
      <div className="flex mt-2" style={{ height: "90px" }}>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"
          alt="logo"
          className="w-[8%] p-4 ml-32"
        />
        <input
          className="w-[40%] ml-52 rounded-full bg-gray-900 text-white bg-opacity-35 text-lg px-6 m-3"
          placeholder="🔍 Search in mail"
        />
        <button
          className="px-4 my-3 shadow-md bg-gray-100 hover:bg-gray-300 transition duration-300 ease-in-out font-semibold text-lg rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div className="mx-48 w-52 px-8 my-3 py-3 rounded-full bg-opacity-50 bg-gray-900 text-lg text-white">Online: {onlineStatus ? "🟢" : "🔴"}</div>
      </div>
      <Dashboard />
    </div>
  );
};

export default Home;
