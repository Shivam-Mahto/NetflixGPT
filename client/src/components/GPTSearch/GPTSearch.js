import React, { useState } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  const [searching, setSearching] = useState(false);

  return (
    <div>
      <GPTSearchBar setSearching={setSearching} />
      <GPTMovieSuggestions searching={searching} />
    </div>
  );
};

export default GPTSearch;
