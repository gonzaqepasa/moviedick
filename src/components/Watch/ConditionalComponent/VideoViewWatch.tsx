import MensajeTemporal from "./TemporalMsg";

interface Props {
  video: {
    results: {
      key: string;
    }[];
  };
}
const VideoViewWatch: React.FC<Props> = ({ video }) => {
  const parameter = `autoplay=1&mute=1&showinfo=0&controls=1&modestbranding=1&loop=1`;
  const embedCode = `https://www.youtube.com/embed/${video.results[0].key}?${parameter}`;
  return (
    <div className="w-full h-72 md:h-96 lg:h-[calc(100vh-3rem)] mt-12">
      <iframe
        className="w-full h-full"
        src={embedCode}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
      <MensajeTemporal />
    </div>
  );
};

export default VideoViewWatch;
