import React, { useEffect } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
