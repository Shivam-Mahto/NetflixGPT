import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addMovieSection } from "../../utils/moviesSlice";
import { API_OPTIONS } from "../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";

const GPTSearchBar = ({ setSearching }) => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const gptSearch = async () => {
    setSearching(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/gpt/search`,
        {
          searchText: searchText.current.value,
        }
      );
      const suggestedMovies = res.data.data.split(", ");
      const promiseArray = suggestedMovies.map((movie) => searchMovie(movie));
      const finalResults = await Promise.all(promiseArray);
      dispatch(addMovieSection(["GPTSearchResults", finalResults]));
    } catch (err) {
      console.log(err);
      toast("An error occured");
    }
  };

  return (
    <div className="w-full min-h-[50vh] bg-black">
      <div className="flex w-full min-h-[50vh] justify-center items-center md:min-h-[65vh]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-wrap justify-center w-full"
        >
          <h1 className="font-bold text-3xl p-2 m-2 text-red-600 md:text-5xl md:m-12 text-center">
            Drowning in choices? What's your current mood for the entertainment
          </h1>
          <input
            ref={searchText}
            className="px-4 py-2  min-w-[60%] rounded-lg text-sm md:text-base"
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={gptSearch}
            className="bg-red-600 text-white mx-4 px-2 py-1 text-sm rounded-lg md:mx-4 md:px-4 md:py-2 md:font-semibold md:text-base"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
