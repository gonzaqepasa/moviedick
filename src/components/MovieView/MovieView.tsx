import ViewImage from "./ViewImage";
import TextView, { typesConfigTextView } from "./TextView";

interface Props {
  MovieMain: [];
  configImage?: {
    topHeight?: boolean;
  };
  textConfig?: typesConfigTextView;
}

const MovieView: React.FC<Props> = ({ MovieMain, textConfig, configImage }) => {
  // Logica de aleatoridad
  const random_number = Math.floor(Math.random() * MovieMain.length);
  const movie: any = MovieMain[random_number];

  return (
    <div className={`relative  w-screen   `}>
      <ViewImage configImage={configImage} movieMain={movie.backdrop_path} />
      <TextView textConfig={textConfig} MovieMain={movie} />
    </div>
  );
};

export default MovieView;
