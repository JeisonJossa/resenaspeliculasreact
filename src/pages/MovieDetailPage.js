import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetallePeliculas } from "../services/api";
import MovieDetail from "../components/MovieDetail";

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getDetallePeliculas(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <main className="App-content">
      {movie && <MovieDetail movie={movie} />}
    </main>
  );
}

export default MovieDetailPage;
