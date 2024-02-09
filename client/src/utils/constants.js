export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API}`,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/original";
