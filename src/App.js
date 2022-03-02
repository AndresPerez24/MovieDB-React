import React from "react";
import { useQueries } from "react-query";
import { getMovies, getGenres } from "./moviesApi";
import Movies from "./components/Movies/movies.jsx";

import "./App.scss";

function App() {

  const results = useQueries([
    { queryKey: ["movies", 1], queryFn: getMovies },
    { queryKey: ["genres", 2], queryFn: getGenres },
  ]);

  console.log("results", results);

  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);

  if (isLoading) {
    return <div>hola max</div>;
  }

  if (isError) {
    return <div>ERROR</div>;
  }

  const movies = results[0].data;
  const genres = results[1].data;

  return (
    <div>
      <Movies movies={movies} genres={genres} />
    </div>
  );
}
export default App;
