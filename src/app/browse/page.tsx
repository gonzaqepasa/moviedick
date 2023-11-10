import MovieView from "@/components/MovieView/MovieView";
import CarouselesMain from "@/components/MovieCarousel/CarouselesMain";
import { dataToRenderHome } from "@/utils/RenderLogic/dataToRenderHome";

export default async function Browse() {
  const data = await dataToRenderHome();
  return (
    <section>
      <MovieView
        textConfig={{
          viewTitle: true,
          viewOverview: true,
        }}
        configImage={{ topHeight: true, gradiant: true }}
        MovieMain={data[0].movies}
      />
      <CarouselesMain data={data} />
    </section>
  );
}
