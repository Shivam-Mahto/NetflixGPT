import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerKey = useSelector((store) => store.movies?.Trailer?.key);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video object-cover"
        src={`https://www.youtube.com/embed/aHMnP0Z3Y9Y?si=${trailerKey}&autoplay=1&mute=1&loop=1controls=0&fs=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
