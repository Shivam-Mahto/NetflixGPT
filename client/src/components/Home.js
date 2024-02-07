import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BACKGROUND_IMG from "../assets/home-page-background-image.jpg";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/movie/browse");
    }
  });
  return (
    <div className="relative flex justify-center items-center">
      <img
        className="absolute top-0 -z-20 min-h-screen h-full w-full object-cover"
        src={BACKGROUND_IMG}
        alt=""
      />

      <div className="absolute top-0 -z-10 bg-black min-h-screen h-full w-full opacity-60"></div>

      <div className="h-screen w-full flex text-white">
        <div className="m-auto flex justify-center flex-col items-center text-center">
          <h1 className="text-4xl font-bold m-2 md:text-5xl">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-2xl m-2">Watch Anywhere</h2>
          <button
            onClick={() => {
              navigate("/sign-in");
            }}
            className="bg-red-600 w-1/2 text-white m-4 px-4 py-2 text-xl rounded-lg md:m-4 md:px-4 md:py-4 md:font-semibold md:text-2xl md:w-1/4 sm:w-1/3"
          >
            {"Get Started >"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
