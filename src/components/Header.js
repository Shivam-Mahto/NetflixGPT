import React from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        toast("An error occured");
      });
  };
  return (
    <div className="absolute w-full flex justify-between bg-transparent">
      <img className="w-40 mx-4" src={NETFLIX_LOGO} alt="Netflix logo" />
      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white m-4 px-4 py-2 rounded-lg font-semibold"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
