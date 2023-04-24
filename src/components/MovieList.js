import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import "../styles/MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
