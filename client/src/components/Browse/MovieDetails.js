import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_URL } from "../../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieDetails = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovieDetails(id);
  }, []);

  return (
    <div className="flex flex-wrap bg-black min-h-screen">
      <div className="w-[100%] flex p-8 md:w-[50%]">
        <img
          className="rounded-md m-auto"
          alt="Movie Card"
          src={IMG_URL + movie?.poster_path}
        />
      </div>
      <div className="w-[100%] text-white  justify-center items-center flex-wrap p-6 md:w-[50%] md:flex">
        <div>
          <h1 className="font-bold text-4xl mb-8 ">{movie?.title}</h1>
          <h3>{movie?.release_date}</h3>
          {movie?.genres?.map((genre) => {
            return (
              <span className="mr-2" key={genre?.id}>
                {genre?.name}
              </span>
            );
          })}
          <h3>{movie?.runtime} min</h3>
          <h3 className="text-xl mt-6">{movie?.overview}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
