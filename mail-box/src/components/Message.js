import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Message = ({ selectedEmailId, handleToggle }) => {
  const data = useSelector((store) => store.email.emails);
  const selectedEmail = data?.filter((item) => item.id === selectedEmailId);
  const data1 = selectedEmail[0];
  const userID = useSelector((store) => store.auth.userID);

  const patchData = async () => {
    const dummyEmail = userID
      .toLowerCase()
      .split("")
      .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
      .join("");

    const data = {
      from: data1.from,
      subject: data1.subject,
      isRead: true,
    };
    try {
      const response = await fetch(
        `https://mail-box-a87a6-default-rtdb.firebaseio.com/${dummyEmail}/inbox/${selectedEmailId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        //
      } else {
        const data = await response.json();
        console.log(data.error.message);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    patchData();
  }, []);

  return (
    <div className="absolute container rounded-2xl p-4 bg-white h-[60%] top-56 w-1/2 ml-[28%] z-50">
      <div className="text-lg">
        Subject : {data1.subject} <i class="uil uil-message"></i>
      </div>
      <div className="text-lg font-medium my-2">From : {data1.from}</div>
      <div className="my-10">{data1.text}</div>
      <button
        className="bg-gray-400 my-4 p-2 text-white rounded-md shadow-md font-semibold"
        onClick={() => handleToggle()}
      >
        Close
      </button>
    </div>
  );
};

export default Message;
