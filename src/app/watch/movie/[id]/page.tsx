import ImageViewWatch from "@/components/Watch/ConditionalComponent/ImageViewWatch";
import TextViewWatch from "@/components/Watch/TextView";
import VideoViewWatch from "@/components/Watch/ConditionalComponent/VideoViewWatch";
import RenderToWatchLogic from "@/utils/RenderLogic/RenderToWatch";

interface Params {
  params: {
    id: number;
  };
}

const WatchMovie: React.FC<Params> = async ({ params }) => {
  const render = new RenderToWatchLogic();
  const data = await render.getMovieDataVideo({ id: params.id });
  const valVideo = data.video.results[0]?.key;

  return (
    <section className="flex flex-col text-neutral-300 items-center">
      {valVideo ? (
        <VideoViewWatch video={data.video} />
      ) : (
        <ImageViewWatch data={data.data} />
      )}
      <TextViewWatch isThis="movie" data={data.data} />
    </section>
  );
};

export default WatchMovie;
