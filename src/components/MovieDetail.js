import React from "react";
import "../styles/MovieDetail.css";

const MovieDetail = ({ movie }) => {
  // Obtén la información relevante de la película
  const title = movie.title;
  const releaseDate = movie.release_date;
  const overview = movie.overview;
  const posterPath = movie.poster_path;

  // URL base para las imágenes de las películas
  const imageUrlBase = "https://image.tmdb.org/t/p/w200";

  return (
    <div className="movie-detail">
      <img src={`${imageUrlBase}${posterPath}`} alt={`${title} poster`} />
      <div className="movie-detail-info">
        <h2>{title}</h2>
        <p>{releaseDate}</p>
        <p>{overview}</p>
        {/* Aquí puedes agregar más información, como actores, reseñas, etc. */}
      </div>
    </div>
  );
};

export default MovieDetail;
