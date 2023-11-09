// themoviedb.ts

// Importa los módulos necesarios
import axios from "axios";

// Define la clave de API de TMDb
const API_KEY = "f52440d510160a6d6086473932c261a3";

// Crea una instancia de Axios con la URL base de TMDb y la clave de API
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "es-AR",
    append_to_response: "videos,images",
  },
});

// Define un objeto que contiene las funciones y constantes relacionadas con la API de TMDb
const TMDbAPI = {
  // Función de utilidad para realizar solicitudes a la API de TMDb
  fetchTmdbData: async (endpoint: string, params?: object) => {
    try {
      const response = await tmdbInstance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error("Error al realizar la solicitud a la API de TMDb:", error);
      throw error;
    }
  },
  // Obtener una película por ID
  getMovieById: async (movieId: number) => {
    const endpoint = `/movie/${movieId}`;
    const params = {
      // language: "es-ES", // Opcional: Especifica el idioma de los resultados
    };
    return TMDbAPI.fetchTmdbData(endpoint, params);
  },
  // Obtener una película por categoria
  getMovieByCategory: async (genresID: number[], page: number) => {
    const endpoint = `/discover/movie?with_genres=${genresID.join(
      "|"
    )}&page=${page}`;
    const params = {
      // language: "es-ES", // Opcional: Especifica el idioma de los resultados
    };
    return TMDbAPI.fetchTmdbData(endpoint, params);
  },
  getTVByCategory: async (genresID: number[], page: number) => {
    const endpoint = `/discover/tv?with_genres=${genresID.join(
      "|"
    )}&page=${page}`;
    const params = {
      // language: "es-ES", // Opcional: Especifica el idioma de los resultados
    };
    return TMDbAPI.fetchTmdbData(endpoint, params);
  },

  // Otras funciones relacionadas con la API de TMDb
  // Ejemplo: Obtener películas populares
  getPopularMovies: async () => {
    const endpoint = "/movie/popular";
    const params = {
      language: "es-ES", // Opcional: Especifica el idioma de los resultados
      append_to_response: "videos,images",
    };
    return TMDbAPI.fetchTmdbData(endpoint, params);
  },

  // Ejemplo: Obtener series populares
  getPopularSeries: async () => {
    const endpoint = "/tv/popular";
    const params = {
      language: "es-ES", // Opcional: Especifica el idioma de los resultados
      append_to_response: "videos,images",
    };
    return TMDbAPI.fetchTmdbData(endpoint, params);
  },
  // Traer todas las categorias
  getAllMoviesCategories: async () => {
    const endpoint = "/genre/movie/list";
    return TMDbAPI.fetchTmdbData(endpoint);
  },
  // Ejemplo: Buscar películas por título
  searchMoviesByTitle: async (query: string) => {
    const endpoint = "/search/movie";
    const params = {
      language: "es-ES", // Opcional: Especifica el idioma de los resultados
      query,
    };
    return TMDbAPI.fetchTmdbData(endpoint, params);
  },

  // Constante: Clave de API
  API_KEY,
  makeImageTmdbUrl: (imagePath: string, imageSize?: string) => {
    return `https://image.tmdb.org/t/p/${
      imageSize ? imageSize : "/original"
    }${imagePath}`;
  },
};

// Exporta el objeto TMDbAPI
export default TMDbAPI;
