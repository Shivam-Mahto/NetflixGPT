import React from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(removeUser());
    navigate("/sign-in");
  };

  return (
    <div className="absolute w-full z-10 flex justify-between bg-transparent">
      <img
        onClick={() => navigate("/")}
        className="w-28 object-contain mx-4 md:w-40 cursor-pointer"
        src={NETFLIX_LOGO}
        alt="Netflix logo"
      />
      {user && (
        <div>
          <Link to="/movie/gptsearch">
            <button className="bg-purple-600 text-white px-2 py-1 text-sm rounded-lg md:m-4 md:px-4 md:py-2 md:font-semibold md:text-base">
              GPT Search
            </button>
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white m-4 px-2 py-1 text-sm rounded-lg md:m-4 md:px-4 md:py-2 md:font-semibold md:text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
