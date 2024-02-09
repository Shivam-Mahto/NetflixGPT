import React, { useRef, useState } from "react";
import Card from "./Card";

const MovieList = ({ title, movies }) => {
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

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-white ml-3 pt-8">{title}</h1>
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
          {movies?.map((movie) => (
            <Card key={movie.id} id={movie.id} path={movie.poster_path} />
          ))}
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
  );
};

export default MovieList;
