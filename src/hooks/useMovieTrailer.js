import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieSection } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const data = await response.json();
    const filteredMovies = data.results;

    const trailer = filteredMovies.filter(
      (video) => video.type === "Trailer"
    )[0];
    dispatch(addMovieSection(["Trailer", trailer]));
  };

  useEffect(() => {
    fetchTrailer();
  });
};

export default useMovieTrailer;
