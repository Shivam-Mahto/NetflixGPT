import React from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const checkUser = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_API}/api/v1/auth-user`,
      {
        token,
      }
    );

    if (res.data.success) {
      dispatch(addUser(res.data.user));
      navigate("/movie/browse");
    }
  };

  useEffect(() => {
    if (token) {
      checkUser();
    }
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
