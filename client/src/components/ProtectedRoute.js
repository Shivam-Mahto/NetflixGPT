import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
