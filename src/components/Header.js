import React from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        toast("An error occured");
      });
  };
  return (
    <div className="absolute w-full z-10 flex justify-between bg-transparent">
      <img
        className="w-20 object-contain mx-4 md:w-40"
        src={NETFLIX_LOGO}
        alt="Netflix logo"
      />
      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white m-4 px-2 py-1 text-sm rounded-lg md:m-4 md:px-4 md:py-2 md:font-semibold md:text-base"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
