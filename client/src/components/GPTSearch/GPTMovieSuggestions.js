import React from "react";
import { useSelector } from "react-redux";
import Card from "../Browse/Card";
import SPINNER from "../../assets/spinner.svg";

const GPTMovieSuggestions = ({ searching }) => {
  const moviesState = useSelector((state) => state?.movies);
  const gptSuggestion = moviesState.GPTSearchResults;

  return (
    <div className="w-full min-h-[50vh] bg-black flex flex-wrap justify-center items-center">
      {searching && !gptSuggestion && <img src={SPINNER} />}
      {gptSuggestion && (
        <div className="w-full min-h-[50vh] flex flex-wrap cursor-pointer">
          {gptSuggestion.map((movies) => {
            return movies.map((movie) => (
              <Card key={movie.id} path={movie.poster_path} id={movie.id} />
            ));
          })}
        </div>
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
