import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const nowPlayingMovies = movies.nowPlayingMovies;
  const topRatedMoveis = movies.topRatedMovies;
  const upcomingMovies = movies.upcomingMovies;
  const popularMovies = movies.popularMovies;

  return (
    <div className="bg-black">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMoveis} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
