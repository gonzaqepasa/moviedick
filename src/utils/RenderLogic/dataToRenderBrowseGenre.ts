import TMDbAPI from "../Api/themoviedb";

interface typesGenresId {
  genreId: number;
}

// Todo esto devuelve para un solo genero
class RenderGenreLogic {
  private async getMoviesByCategory(genreId: number) {
    const Popular = await TMDbAPI.getPopularMovies();
    const moviesPage1 = await TMDbAPI.getMovieByCategory([genreId], 1);
    const moviesPage2 = await TMDbAPI.getMovieByCategory([genreId], 2);
    const moviesPage3 = await TMDbAPI.getMovieByCategory([genreId], 3);
    const all = [
      ...moviesPage1.results,
      ...moviesPage2.results,
      ...moviesPage3.results,
    ];
    return { all, Popular: Popular.results };
  }

  private async getTvByCategory(genreId: number) {
    const Popular = await TMDbAPI.getPopularSeries();
    const tvPage1 = await TMDbAPI.getTVByCategory([genreId], 1);
    const tvPage2 = await TMDbAPI.getTVByCategory([genreId], 2);
    const tvPage3 = await TMDbAPI.getTVByCategory([genreId], 3);
    const all = [...tvPage1.results, ...tvPage2.results, ...tvPage3.results];
    return { all, Popular: Popular.results };
  }
  // Criterio de separación (por ejemplo, objetos con id par e impar)

  private criterio = (objeto: any) => objeto.id % 2 === 0;

  private async dataToSend(
    res: { all: any[]; Popular: any[] },
    thisIs: "tv" | "movie"
  ) {
    const dataToSend = [
      {
        movies: res.all.filter(this.criterio),
        titleSection: "",
        thisIs,
      },
      {
        movies: res.all.filter((objeto) => !this.criterio(objeto)),
        titleSection: "",
        thisIs,
      },
      {
        movies: res.Popular,
        titleSection: `Populares `,
        thisIs,
      },
    ];
    return dataToSend;
  }

  public async getTv({ genreId }: { genreId: number }) {
    const data = await this.getTvByCategory(genreId);
    return await this.dataToSend(data, "tv");
  }
  public async getMovie({ genreId }: { genreId: number }) {
    const data = await this.getMoviesByCategory(genreId);
    return await this.dataToSend(data, "movie");
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
