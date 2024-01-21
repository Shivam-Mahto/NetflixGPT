import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {
    addMovieSection: (state, action) => {
      const [sectionName, moviesArray] = action.payload;
      state[sectionName] = moviesArray;
    },
  },
});

export const { addMovieSection } = moviesSlice.actions;
export default moviesSlice.reducer;
