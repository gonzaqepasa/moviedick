import TMDbAPI from "../Api/themoviedb";

interface typesGenresId {
  genreId: number;
}

// Todo esto devuelve para un solo genero
class RenderGenreLogic {
  private async getMoviesByCategory(genreId: number) {
    const moviesPage1 = await TMDbAPI.getMovieByCategory([genreId], 1);
    const moviesPage2 = await TMDbAPI.getMovieByCategory([genreId], 2);
    const moviesPage3 = await TMDbAPI.getMovieByCategory([genreId], 3);
    const allMovies = [
      ...moviesPage1.results,
      ...moviesPage2.results,
      ...moviesPage3.results,
    ];
    return allMovies;
  }

  private async getTvByCategory(genreId: number) {
    const tvPage1 = await TMDbAPI.getTVByCategory([genreId], 1);
    const tvPage2 = await TMDbAPI.getTVByCategory([genreId], 2);
    const tvPage3 = await TMDbAPI.getTVByCategory([genreId], 3);
    const allTv = [...tvPage1.results, ...tvPage2.results, ...tvPage3.results];
    return allTv;
  }
  // Criterio de separación (por ejemplo, objetos con id par e impar)

  private criterio = (objeto: any) => objeto.id % 2 === 0;

  private async dataToSend(res: any[]) {
    const dataToSend = [
      {
        movies: res.filter(this.criterio),
        titleSection: "",
      },
      {
        movies: res.filter((objeto) => !this.criterio(objeto)),
        titleSection: "",
      },
      {
        movies: res,
        titleSection: `Peliculas Populares `,
      },
    ];
    return dataToSend;
  }

  public async getTv({ genreId }: { genreId: number }) {
    const data = await this.getTvByCategory(genreId);
    return await this.dataToSend(data);
  }
  public async getMovie({ genreId }: { genreId: number }) {
    const data = await this.getMoviesByCategory(genreId);
    return await this.dataToSend(data);
  }
}

export default RenderGenreLogic;

// export const dataToRenderBrowseGenre = async ({ genreId }: typesGenresId) => {
//   const popularMovies = await TMDbAPI.getPopularMovies();
//   const moviesPage1 = await TMDbAPI.getMovieByCategory([genreId], 1);
//   const moviesPage2 = await TMDbAPI.getMovieByCategory([genreId], 2);
//   const moviesPage3 = await TMDbAPI.getMovieByCategory([genreId], 3);
//   const allMovies = [
//     ...moviesPage1.results,
//     ...moviesPage2.results,
//     ...moviesPage3.results,
//   ];
//   // Criterio de separación (por ejemplo, objetos con id par e impar)
//   const criterio = (objeto: any) => objeto.id % 2 === 0;
//   // Devuelve un array que será mapeado por el componente <CarouselesMain data={data}/>
//   const dataToSend = [
//     {
//       movies: allMovies.filter(criterio),
//       titleSection: "",
//     },
//     {
//       movies: allMovies.filter((objeto) => !criterio(objeto)),
//       titleSection: "",
//     },
//     {
//       movies: popularMovies.results,
//       titleSection: `Peliculas Populares `,
//     },
//   ];
//   return dataToSend;
// };
