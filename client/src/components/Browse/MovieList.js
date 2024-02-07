import React, { useRef, useState } from "react";
import Card from "./Card";

const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (left) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = left
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-white ml-3">{title}</h1>
      <div className="relative flex cursor-pointer">
        <div
          className="absolute h-full w-10 p-2 left-0 text-white bg-gradient-to-r from-black"
          onClick={() => handleClick(1)}
        >
          <h1 className="absolute top-1/3 text-2xl md:text-4xl">{">"}</h1>
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
          className="absolute h-full w-10 p-2 right-0 text-white bg-gradient-to-l from-black"
          onClick={() => handleClick(0)}
        >
          <h1 className="absolute top-1/3 text-2xl md:text-4xl">{"<"}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
