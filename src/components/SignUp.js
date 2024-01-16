import React from "react";
import BACKGROUND_IMG from "../assets/home-page-background-image.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img
        className="absolute top-0 -z-20 min-h-screen h-full w-full object-cover"
        src={BACKGROUND_IMG}
      />

      <div className="absolute top-0 -z-10 bg-black min-h-screen h-full w-full opacity-40"></div>

      <div className="box-content w-72 p-10 m-20 bg-black bg-opacity-80 rounded-lg md:w-80 md:p-16">
        <h1 className="font-bold text-white text-3xl my-2">Sign Up</h1>
        <form className="flex flex-col">
          <input
            className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
            type="text"
            placeholder="Name"
          />

          <input
            className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
            type="text"
            placeholder="Email"
          />

          <input
            className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
            type="text"
            placeholder="Phone"
          />

          <input
            className="my-4 p-4 rounded-sm bg-[#333333] text-white"
            type="password"
            placeholder="Password"
          />
          <button className="my-4 p-4 bg-red-600 rounded-lg text-white">
            Sign Up
          </button>

          <p className="text-[#656464]">
            New to NetflixGPT? &nbsp;
            <Link to="/sign-up" className="text-white">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
