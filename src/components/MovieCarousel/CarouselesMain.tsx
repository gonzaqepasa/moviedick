import MovieCarousel from "./Carousel/MovieCarousel";
import TMDbAPI from "@/utils/Api/themoviedb";
import { typeThisIs } from "./card/Card";

export interface typesMoviesForCarousel {
  data: {
    movies: any;
    titleSection: string;
    thisIs: typeThisIs;
  }[];
}

async function CarouselesMain({ data }: typesMoviesForCarousel) {
  return (
    <div className="flex flex-col w-full">
      {data.map((movie) => (
        <MovieCarousel
          thisIs={movie.thisIs}
          key={movie.movies.id}
          movies={movie.movies}
          titleSection={movie.titleSection}
        />
      ))}
    </div>
  );
}

export default CarouselesMain;
