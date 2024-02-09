import React from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../utils/constants";

const Card = ({ path, id }) => {
  const navigate = useNavigate();
  if (!path) {
    return;
  }

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="w-36 md:w-48 m-2 flex-shrink-0 md:mx-3"
    >
      <img className="rounded-md" alt="Movie Card" src={IMG_URL + path} />
    </div>
  );
};

export default Card;
