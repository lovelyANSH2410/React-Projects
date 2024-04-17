import React, { useEffect, useState } from "react";
import Profile from "./Profile";

const Header = () => {
  const [profile, setProfile] = useState(false);
  const tokenID = localStorage.getItem("idToken");
  const [displayName, setDisplayName] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD66jURNjlpKIlniFkfom3AFtWFiTeWF0w",
          {
            method: "POST",
            body: JSON.stringify({ idToken: tokenID }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const data1 = data.users[0];
          setDisplayName(data1.displayName);
          setPhotoURL(data1.photoUrl);
          setProfileComplete(true);
        } else {
          const data1 = await response.json();
          const msg = data1.error.message;
          console.log(msg);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [tokenID]);

  return (
    <div>
      <div className="flex bg-white justify-evenly text-xl shadow-md w-full font-medium">
        <div className="flex w-1/4 justify-evenly py-10">
          <h1>Home</h1>
          <h1>Products</h1>
          <h1>About us</h1>
        </div>
        {!profileComplete && (
          <h1 className="text-lg text-center m-4 p-4">
            Your profile is incomplete.{" "}
            <button
              onClick={handleProfile}
              className="text-blue-500 font-semibold"
            >
              Complete Now.
            </button>
          </h1>
        )}
        <div className="flex my-5">
          <img
            className="w-14 h-14 mx-2 rounded-full"
            src={photoURL}
            alt="logo"
          />
          <h1 className="py-4">{displayName}</h1>
        </div>
      </div>
      {profile && <Profile handleProfile={handleProfile} />}
    </div>
  );
};

export default Header;
