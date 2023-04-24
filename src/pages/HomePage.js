import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { buscarPeliculas } from "../services/api";
import "../styles/HomePage.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("popularity.desc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await buscarPeliculas(searchQuery, 1);
        setMovies(response.results);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar las películas: ", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="container">
      <h1>Últimos estrenos</h1>
      <div className="row">
        <div className="col-md-3">
          <Filter value={filter} onChange={(valor) => setFilter(valor)} />
        </div>
        <div className="col-md-9">
          <SearchBar onBuscar={(busqueda) => setSearchQuery(busqueda)} />
          {loading ? (
            <p>Cargando películas...</p>
          ) : movies.length === 0 ? (
            <p>No se encontraron películas.</p>
          ) : (
            <MovieList movies={movies} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
