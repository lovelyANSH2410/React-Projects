import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Inbox = () => {
  const [emails, setEmails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userID = useSelector((store) => store.auth.userID);
  const [showMessage, setShowMessage] = useState(false);

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
          subject: json[key].subject,
          from: json[key].from,
        });
      }
      setEmails(loadedData);
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

  return (
    <div>
      {!isLoading && emails.length === 0 && (
        <p className="text-3xl text-center m-20">Found no emails.</p>
      )}
      {isLoading ? (
        <h1 className="text-3xl text-center m-20">Searching for emails...</h1>
      ) : (
        emails.map((item) => (
          <Link
            to={`/mail/${item.id}`}
            key={item.id}
            className="flex w-full border-b border-b-.5 border-black p-4 py-6"
          >
            <div className="w-[30%] text-lg px-5">
              <i class="uil uil-message"></i> From: {item.from}
            </div>
            {!item.isRead && (
              <button className="bg-blue-600 text-white text-xs p-2 rounded-xl">
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
        ))
      )}
    </div>
  );
};

export default Inbox;
