import React, { useRef, useState } from "react";
import BACKGROUND_IMG from "../assets/home-page-background-image.jpg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validate";
import Header from "./Header";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleIsSignInForm = () => {
    // To check if the current form is of Sign In or Sign Up
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    // validate name, email and password
    const nameMessage = validateName(name?.current?.value);
    const emailMessage = validateEmail(email.current.value);
    const passwordMessage = validatePassword(password.current.value);

    if (nameMessage || emailMessage || passwordMessage) {
      setErrorMessage({ emailMessage, passwordMessage, nameMessage });
      return;
    }

    // sign up / sign in

    if (isSignInForm) {
      // sign In

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          toast("Log In Successful");
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          toast("Invalid Credentials");
        });
    } else {
      // sign Up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              toast("Sign Up Successful");
            })
            .catch((error) => {
              // An error occurred
              console.log(error);
              toast("An Error occured!!");
            });
        })
        .catch((error) => {
          toast("Email already in use");
        });
    }
  };

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
          <h1 className="font-bold text-white text-3xl my-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            {!isSignInForm && (
              <input
                ref={name}
                className="my-4 p-4 rounded-sm bg-[#333333] text-white border-none"
                type="text"
                placeholder="Name"
                required
              />
            )}
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
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className="text-[#656464]">
              {isSignInForm
                ? "New to NetflixGPT? "
                : "Already have an account? "}
              <span
                onClick={toggleIsSignInForm}
                className="font-bold text-white cursor-pointer hover:text-red-600"
              >
                {!isSignInForm ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
