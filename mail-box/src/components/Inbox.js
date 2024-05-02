import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "./Message";
import { addData } from "../store/emailSlice";

const Inbox = () => {
  const [emails, setEmails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const userID = useSelector((store) => store.auth.userID);
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const dummyEmail = userID
      .toLowerCase()
      .split("")
      .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
      .join("");

    try {
      const response = await fetch(
        `https://mail-box-a87a6-default-rtdb.firebaseio.com/${dummyEmail}/inbox.json`
      );
      const json = await response.json();
      const loadedData = [];

      for (const key in json) {
        loadedData.push({
          id: key,
          isRead: json[key].isRead,
          subject: json[key].subject,
          from: json[key].from,
        });
      }
      setEmails(loadedData.reverse());
      dispatch(addData(loadedData));
      setIsLoading(false);
    } catch (error) {
      console.error("Error", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const dummyEmail = userID
        .toLowerCase()
        .split("")
        .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
        .join("");
      const response = await fetch(
        `https://mail-box-a87a6-default-rtdb.firebaseio.com/${dummyEmail}/inbox/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        //
        fetchData();
      } else {
        const data = await response.json();
        console.log(data.error.message);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
    fetchData()
  }

  const handleEmailClick = (id) => {
    setSelectedEmailId(id);
    handleToggle();
  };

  return (
    <div>
      {!isLoading && emails.length === 0 && (
        <p className="text-3xl text-center m-20">Found no emails.</p>
      )}
      {isLoading ? (
        <h1 className="text-3xl text-center m-20">Searching for emails...</h1>
      ) : (
        emails.map((item) => (
          <div>
            <Link
              key={item.id}
              className="flex w-full border-b border-b-.5 border-black p-4 py-6"
              onClick={() => handleEmailClick(item.id)}
            >
              <div className="w-[30%] text-lg px-5">
                <i class="uil uil-message"></i> From: {item.from}
              </div>
              {!item.isRead && (
                <button className=" bg-blue-600 text-white text-xs p-2 rounded-xl">
                  New
                </button>
              )}
              <div className="w-[60%] text-lg px-5 font-semibold">
                Subject: {item.subject}
              </div>
              <button onClick={() => handleDelete(item.id)}>
                <i class="uil uil-trash-alt"></i>
              </button>
            </Link>
          </div>
        ))
      )}
      {toggle && <Message selectedEmailId={selectedEmailId} handleToggle={handleToggle} />}
    </div>
  );
};

export default Inbox;
