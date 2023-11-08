import MovieCarousel from "./Carousel/MovieCarousel";
import TMDbAPI from "@/utils/Api/themoviedb";

export interface typesMoviesForCarousel {
  data: {
    movies: any;
    titleSection: string;
  }[];
}

async function CarouselesMain({ data }: typesMoviesForCarousel) {
  return (
    <div className="flex flex-col w-full">
      {data.map((movie) => (
        <MovieCarousel
          key={movie.movies.id}
          movies={movie.movies}
          titleSection={movie.titleSection}
        />
      ))}
    </div>
  );
}

export default CarouselesMain;
