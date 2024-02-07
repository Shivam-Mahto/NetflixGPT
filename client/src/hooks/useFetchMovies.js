import { useDispatch } from "react-redux";
import { addMovieSection } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response1 = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data1 = await response1.json();
    const nowPlayingMovies = data1.results;
    dispatch(addMovieSection(["nowPlayingMovies", nowPlayingMovies]));

    const response2 = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data2 = await response2.json();
    const popularMovies = data2.results;
    dispatch(addMovieSection(["popularMovies", popularMovies]));

    const response3 = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data3 = await response3.json();
    const topRated = data3.results;
    dispatch(addMovieSection(["topRatedMovies", topRated]));

    const response4 = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data4 = await response4.json();
    const upcomingMovies = data4.results;
    dispatch(addMovieSection(["upcomingMovies", upcomingMovies]));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useFetchMovies;
