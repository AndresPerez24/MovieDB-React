import axios from "axios";

import { API_KEY } from "./apiKey";

export const getMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data.results;
};

export const getGenres = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};

