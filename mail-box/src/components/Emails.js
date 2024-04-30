import React from "react";

const Emails = () => {
  return (
    <div className="relative ml-32 flex m-10 space-x-5">
      <div className="w-[18%] mx-2 bg-gray-900 rounded-3xl bg-opacity-30 py-5 px-5">
        <button className=" px-6 py-5  text-center shadow-md  bg-white rounded-2xl my-4 font-semibold">
          ✒️ Compose
        </button>
        <button className="text-white w-full text-lg text-center p-2 border-2 rounded-full border-gray-500 hover:bg-gray-200 hover:bg-opacity-30">
          📥Inbox
        </button>
        <button className="text-white my-2 w-full text-lg text-center p-2 border-2 rounded-full border-gray-500 hover:bg-gray-200 hover:bg-opacity-30">
          ⭐Starred
        </button>
        <button className="text-white w-full text-lg text-center p-2 border-2 rounded-full border-gray-500 hover:bg-gray-200 hover:bg-opacity-30">
          🕛Snoozed
        </button>
        <button className="text-white my-2 w-full text-lg text-center p-2 border-2 rounded-full border-gray-500 hover:bg-gray-200 hover:bg-opacity-30">
          ⏭️Sent
        </button>
        <button className="text-white w-full text-lg text-center p-2 border-2 rounded-full border-gray-500 hover:bg-gray-200 hover:bg-opacity-30">
          📄Drafts
        </button>
      </div>
      <div className="w-[80%] bg-white h-screen rounded-3xl bg-opacity-70"></div>
    </div>
  );
};

export default Emails;
