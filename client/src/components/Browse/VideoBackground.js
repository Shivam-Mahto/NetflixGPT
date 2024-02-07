import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerKey = useSelector((store) => store.movies?.Trailer?.key);
  return (
    <div className="w-full">
      <iframe
        className="w-full min-h-[50vh] aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?playlist=${trailerKey}&loop=1&autoplay=1&mute=1&controls=0&fs=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
