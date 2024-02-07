import React, { useRef, useState, useEffect } from "react";
import BACKGROUND_IMG from "../../assets/home-page-background-image.jpg";
import { validateEmail, validatePassword } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [errorMessage, setErrorMessage] = useState({});

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async () => {
    // validate email and password
    const emailMessage = validateEmail(email.current.value);
    const passwordMessage = validatePassword(password.current.value);

    if (emailMessage || passwordMessage) {
      setErrorMessage({ emailMessage, passwordMessage });
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/sign-in`,
        {
          email: email.current.value,
          password: password.current.value,
        }
      );

      console.log(res);

      if (res.data.success) {
        dispatch(addUser(res.data.user));
        localStorage.setItem("token", res.data.user.token);
        toast(res.data.message);
        navigate("/movie/browse");
      } else {
        toast(res.data.message);
      }
    } catch (err) {
      toast(err.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/movie/browse");
    }
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center">
        <img
          className="absolute top-0 -z-20 min-h-screen h-full w-full object-cover"
          src={BACKGROUND_IMG}
          alt=""
        />

        <div className="absolute top-0 -z-10 bg-black min-h-screen h-full w-full opacity-40"></div>

        <div className="box-content w-72 p-10 my-20 mx-10 bg-black bg-opacity-80 rounded-lg md:w-80 md:p-12">
          <h1 className="font-bold text-white text-3xl my-2">Sign In</h1>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <input
              ref={email}
              id="email"
              className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
              type="text"
              placeholder="Email"
              autoComplete="true"
              required
            />
            {errorMessage?.emailMessage && (
              <p className="py-2 text-orange-600">
                {errorMessage?.emailMessage}
              </p>
            )}
            <input
              ref={password}
              id="password"
              className="my-4 p-4 rounded-sm bg-[#333333] text-white"
              type="password"
              placeholder="Password"
              required
              autoComplete="true"
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
              Sign In
            </button>

            <p className="text-[#656464]">
              {"New to NetflixGPT? "}
              <span
                onClick={() => {
                  navigate("/sign-up");
                }}
                className="font-bold text-white cursor-pointer hover:text-red-600"
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
