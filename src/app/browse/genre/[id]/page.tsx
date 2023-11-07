import CarouselesMain from "@/components/MovieCarousel/CarouselesMain";
import MovieView from "@/components/MovieView/MovieView";
import TMDbAPI from "@/utils/Api/themoviedb";
import { dataToRenderBrowseGenre } from "@/utils/RenderLogic/dataToRenderBrowseGenre";
interface Props {
  params: {
    id: number;
  };
}
const GenrePage: React.FC<Props> = async ({ params }) => {
  const dataToRender = await dataToRenderBrowseGenre({ genreId: params.id });
  console.log();
  return (
    <section>
      <MovieView MovieMain={dataToRender[0].movies} />
      <CarouselesMain data={dataToRender} />
    </section>
  );
};

export default GenrePage;
