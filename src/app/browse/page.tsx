import MovieView from "@/components/MovieView/MovieView";
import CarouselesMain from "@/components/MovieCarousel/CarouselesMain";
import { dataToRenderHome } from "@/utils/RenderLogic/dataToRender";


export default async function Browse() {
  // const data = await dataToRenderHome();
  return (
    <main>
      {/* <MovieView MovieMain={data[0].movies} /> */}
      {/* <CarouselesMain data={data} /> */}
    </main>
  );
}
