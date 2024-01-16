import React from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute w-full flex justify-between bg-transparent">
      <img className="w-40 mx-4" src={NETFLIX_LOGO} />
      <button className="bg-red-600 text-white m-4 px-4 py-2 rounded-lg font-semibold">
        Sign In
      </button>
    </div>
  );
};

export default Header;
