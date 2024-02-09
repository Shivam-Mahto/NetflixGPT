import React from "react";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies.nowPlayingMovies);

  if (!moviesList) {
    return;
  }

  const mainMovie = moviesList[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full">
      <VideoTitle title={original_title} description={overview} id={id} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
