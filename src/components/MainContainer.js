import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies.nowPlayingMovies);

  if (!moviesList) {
    return;
  }

  const mainMovie = moviesList[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen w-full">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
