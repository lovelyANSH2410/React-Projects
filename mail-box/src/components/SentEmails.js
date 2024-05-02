import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SentEmails = () => {
  const [emails, setEmails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userID = useSelector((store) => store.auth.userID);

  const fetchData = async () => {
    const dummyEmail = userID
      .toLowerCase()
      .split("")
      .filter((x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
      .join("");

    try {
      const response = await fetch(
        `https://mail-box-a87a6-default-rtdb.firebaseio.com/${dummyEmail}/sent.json`
      );
      const json = await response.json();
      const loadedData = [];

      for (const key in json) {
        loadedData.push({
          id: key,
          subject: json[key].subject,
          to: json[key].to,
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
        `https://mail-box-a87a6-default-rtdb.firebaseio.com/${dummyEmail}/sent/${id}.json`,
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
      {isLoading ? (
        <h1 className="text-3xl text-center m-20">Searching for emails...</h1>
      ) : (
        emails.map((item) => (
          <div
            key={item.id}
            className="flex w-full border-b border-b-.5 border-black p-4 py-6"
          >
            <div className="w-[30%] text-lg px-5">
              <i class="uil uil-message"></i> To: {item.to}
            </div>
            <div className="w-[60%] text-lg px-5 font-semibold">
              Subject: {item.subject}
            </div>
            <button onClick={() => handleDelete(item.id)}>
              <i class="uil uil-trash-alt"></i>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SentEmails;
