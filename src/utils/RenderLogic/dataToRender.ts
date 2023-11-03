import { getNumberGenres } from "../Logic/getNumberGenres";
import TMDbAPI from "../Api/themoviedb";

export async function dataToRenderHome() {
  // Esta funcion contiene toda la logica para llamar
  // a las diferentes peliculas y renderizarlas en el Home
  const arrayIds = [28, 12, 16, 35, 878, 27];
  const popularMovies = await TMDbAPI.getPopularMovies();
  const moviesPage1 = await TMDbAPI.getMovieByCategory(arrayIds, 1);
  const moviesPage2 = await TMDbAPI.getMovieByCategory(arrayIds, 2);
  const moviesPage3 = await TMDbAPI.getMovieByCategory(arrayIds, 3);
  const allMovies = [
    ...moviesPage1.results,
    ...moviesPage2.results,
    ...moviesPage3.results,
  ];

  // Devuelve un array que será mapeado por el componente <CarouselesMain data={data}/>
  const dataToSend = [
    {
      movies: popularMovies.results,
      titleSection: `Peliculas Populares `,
    },
    {
      movies: allMovies.filter((e: any) =>
        e.genre_ids.includes(getNumberGenres("Accion"))
      ),
      titleSection: "Acción",
    },
    {
      movies: allMovies.filter((e: any) =>
        e.genre_ids.includes(getNumberGenres("Aventura"))
      ),
      titleSection: "Aventura",
    },
    {
      movies: allMovies.filter((e: any) =>
        e.genre_ids.includes(getNumberGenres("Animacion"))
      ),
      titleSection: "Animación",
    },
    {
      movies: allMovies.filter((e: any) =>
        e.genre_ids.includes(getNumberGenres("Comedia"))
      ),
      titleSection: "Comedia",
    },
    {
      movies: allMovies.filter((e: any) =>
        e.genre_ids.includes(getNumberGenres("CienciaFiccion"))
      ),
      titleSection: "Ciencia Ficción",
    },
    {
      movies: allMovies.filter((e: any) =>
        e.genre_ids.includes(getNumberGenres("Terror"))
      ),
      titleSection: "Terror",
    },
  ];
  return dataToSend;
}
