import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute aspect-video w-full px-10 text-white bg-gradient-to-r from-black ">
      <div className="absolute bottom-[15%] md:bottom-[25%]">
        <h1 className="text-2xl font-bold mb-2 md:text-4xl">{title}</h1>
        <h3 className="hidden text-sm mb-4 w-2/4 md:block">{description}</h3>
        <div>
          <button className=" bg-white text-black mr-2 px-2 py-1 text-sm rounded-lg md:mr-4 md:px-4 md:py-2 md:font-semibold md:text-base">
            Play
          </button>
          <button className=" bg-gray-500 px-2 py-1 text-sm rounded-lg md:mr-4 md:px-4 md:py-2 md:font-semibold md:text-base bg-opacity-50">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
