import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BACKGROUND_IMG from "../../assets/home-page-background-image.jpg";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/validate";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [errorMessage, setErrorMessage] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async () => {
    // validate name, email and password
    const nameMessage = validateName(name?.current?.value);
    const emailMessage = validateEmail(email.current.value);
    const passwordMessage = validatePassword(password.current.value);

    if (nameMessage || emailMessage || passwordMessage) {
      setErrorMessage({ emailMessage, passwordMessage, nameMessage });
      return;
    }
    // The backend call for sign-up
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/sign-up`,
        {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        }
      );

      if (res.data.success) {
        dispatch(addUser(res.data.user));
        localStorage.setItem("token", res.data.user.token);
        toast(res.data.message);
        navigate("/browse");
      } else {
        toast(res.data.message);
      }
    } catch (err) {
      toast("An error occurred");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/movie/browse");
    }
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen">
        <img
          className="absolute top-0 -z-20 min-h-screen h-full w-full object-cover"
          src={BACKGROUND_IMG}
          alt=""
        />

        <div className="absolute top-0 -z-10 bg-black min-h-screen h-full w-full opacity-40"></div>

        <div className="box-content w-72 p-10 my-20 mx-10 bg-black bg-opacity-80 rounded-lg md:w-80 md:p-12">
          <h1 className="font-bold text-white text-3xl my-2">Sign Up</h1>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <input
              ref={name}
              className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
              type="text"
              placeholder="Name"
              required
            />
            {errorMessage?.nameMessage && (
              <p className="py-2 text-orange-600">
                {errorMessage?.nameMessage}
              </p>
            )}

            <input
              ref={email}
              className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
              type="text"
              placeholder="Email"
              required
            />
            {errorMessage?.emailMessage && (
              <p className="py-2 text-orange-600">
                {errorMessage?.emailMessage}
              </p>
            )}
            <input
              ref={password}
              className="my-4 p-4 rounded-sm bg-[#333333] text-white"
              type="password"
              placeholder="Password"
              required
            />
            {errorMessage?.passwordMessage && (
              <p className="py-2 text-orange-600">
                {errorMessage?.passwordMessage}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="my-4 p-4 bg-red-600 rounded-lg text-white"
            >
              Sign Up
            </button>

            <p className="text-[#656464]">
              {"Already have an account? "}
              <span
                onClick={() => {
                  navigate("/sign-in");
                }}
                className="font-bold text-white cursor-pointer hover:text-red-600"
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
