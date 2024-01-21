import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieSection } from "../utils/moviesSlice";
import { useEffect } from "react";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    const nowPlayingMovies = data.results;
    dispatch(addMovieSection(["nowPlayingMovies", nowPlayingMovies]));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useFetchMovies;
