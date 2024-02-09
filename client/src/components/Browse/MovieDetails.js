import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_URL } from "../../utils/constants";
import MovieList from "./MovieList";
import Modal from "./Modal";

const MovieDetails = () => {
  const rowRef = useRef(null);

  const handleClick = (left) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = left
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [recommendations, setRecommendations] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [modal, setModal] = useState(false);

  const getMovieDetails = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    setMovie(data);
  };

  const getMovieRecommendation = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();
    setRecommendations(data.results);
  };

  const getMovieTrailers = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    setTrailers(data.results);
  };

  useEffect(() => {
    getMovieDetails(id);
    getMovieRecommendation(id);
    getMovieTrailers(id);
  }, [id]);

  return (
    <div className="min-h-screen bg-black">
      {movie && (
        <div className="flex flex-wrap bg-black min-h-screen">
          <div className="w-[100%] flex p-8 md:w-[50%] mt-10">
            <img
              className="rounded-md m-auto"
              alt="Movie Card"
              src={IMG_URL + movie?.poster_path}
            />
          </div>
          <div className="w-[100%] text-white justify-center items-center mt-0 flex-wrap p-6 md:w-[50%] md:flex md:mt-10">
            <div>
              <h1 className="text-6xl mb-8 ">{movie?.title}</h1>
              <h3>{movie?.release_date}</h3>
              <div className="flex flex-wrap">
                {movie?.genres?.map((genre) => {
                  return (
                    <div
                      className="bg-red-600 text-sm items-center p-1 rounded-lg mr-1 my-2"
                      key={genre?.id}
                    >
                      {genre?.name}
                    </div>
                  );
                })}
              </div>
              <h3>{movie?.runtime} min</h3>
              <h3 className="text-xl mt-6">{movie?.overview}</h3>
            </div>
          </div>

          <div className="flex flex-col min-w-full">
            <h1 className="text-white text-2xl pt-8 mx-2">Official Videos</h1>
            <div className="relative flex cursor-pointer min-w-screen">
              <div
                className="hidden sm:block absolute h-full w-10 p-2 left-0 text-white bg-gradient-to-r from-black"
                onClick={() => handleClick(1)}
              >
                <h1 className="hidden sm:block absolute top-1/3 text-2xl md:text-4xl font-bold">
                  {">"}
                </h1>
              </div>
              <div
                ref={rowRef}
                className="flex overflow-x-scroll scrollbar-hidden scrollbar-none"
              >
                {trailers.map((trailer) => {
                  return (
                    <img
                      src={`http://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
                      className="w-80 mx-2"
                      onClick={() => setModal(trailer.key)}
                    />
                  );
                })}
              </div>
              <div
                className="hidden sm:block absolute h-full w-10 p-2 right-0 text-white bg-gradient-to-l from-black"
                onClick={() => handleClick(0)}
              >
                <h1 className="hidden sm:block absolute top-1/3 text-2xl md:text-4xl font-bold">
                  {"<"}
                </h1>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <MovieList title="Recommendations" movies={recommendations} />
          </div>
          <Modal modal={modal} setModal={setModal} />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
