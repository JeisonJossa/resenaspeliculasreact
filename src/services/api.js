import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5735aa9b076dd1ff24c560514c14fc85",
    language: "es-ES",
  },
});

// Obtener películas populares
export const getPopularPeliculas = async (page = 1) => {
  const { data } = await tmdbApi.get("/movie/popular", {
    params: {
      page,
    },
  });
  return data;
};

// Buscar películas
export const buscarPeliculas = async (query, page = 1) => {
  const { data } = await tmdbApi.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return data;
};

// Obtener detalles de una película
export const getDetallePeliculas = async (movieId) => {
  const { data } = await tmdbApi.get(`/movie/${movieId}`);
  return data;
};

// Obtener créditos de una película (actores, equipo técnico, etc.)
export const getCreditosPeliculas = async (movieId) => {
  const { data } = await tmdbApi.get(`/movie/${movieId}/credits`);
  return data;
};

/*
export default {
  getPopularPeliculas,
  buscarPeliculas,
  getDetallePeliculas,
  getCreditosPeliculas,
};
*/