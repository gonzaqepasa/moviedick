import FilterGenrePage from "@/components/GenrePages/filter/FilterGenrePage";
import CarouselesMain from "@/components/MovieCarousel/CarouselesMain";
import MovieView from "@/components/MovieView/MovieView";
import TMDbAPI from "@/utils/Api/themoviedb";
import genres from "@/utils/genresConfig/genres.json";
import { dataToRenderBrowseGenre } from "@/utils/RenderLogic/dataToRenderBrowseGenre";
interface Props {
  params: {
    id: number;
  };
}
const GenrePage: React.FC<Props> = async ({ params }) => {
  const dataToRender = await dataToRenderBrowseGenre({ genreId: params.id });

  return (
    <section className="min-h-screen flex flex-col items-center justify-around">
      {dataToRender[0].movies.length > 0 ? (
        <>
          <MovieView MovieMain={dataToRender[0].movies} />
          <FilterGenrePage
            genres={genres.genresMovies}
            genresFor="movie"
            actualGenre={params.id}
          />
          <CarouselesMain data={dataToRender} />
        </>
      ) : (
        <>
          <div className="flex py-10 items-center justify-center">
            <h2 className="text-neutral-300">Este genero no se reconoce</h2>
          </div>
        </>
      )}
    </section>
  );
};

export default GenrePage;
