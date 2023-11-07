import TMDbAPI from "../Api/themoviedb";

interface typesGenresId {
  genreId: number;
}

export const dataToRenderBrowseGenre = async ({ genreId }: typesGenresId) => {
  const popularMovies = await TMDbAPI.getPopularMovies();
  const moviesPage1 = await TMDbAPI.getMovieByCategory([genreId], 1);
  const moviesPage2 = await TMDbAPI.getMovieByCategory([genreId], 2);
  const moviesPage3 = await TMDbAPI.getMovieByCategory([genreId], 3);
  const allMovies = [
    ...moviesPage1.results,
    ...moviesPage2.results,
    ...moviesPage3.results,
  ];
  // Criterio de separación (por ejemplo, objetos con id par e impar)
  const criterio = (objeto: any) => objeto.id % 2 === 0;
  // Devuelve un array que será mapeado por el componente <CarouselesMain data={data}/>
  const dataToSend = [
    {
      movies: allMovies.filter(criterio),
      titleSection: "",
    },
    {
      movies: allMovies.filter((objeto) => !criterio(objeto)),
      titleSection: "",
    },
    {
      movies: popularMovies.results,
      titleSection: `Peliculas Populares `,
    },
  ];
  return dataToSend;
};
