import ViewImage from "./ViewImage";
import TextView, { typesConfigTextView } from "./TextView";

interface Props {
  MovieMain: [];
  textConfig?: typesConfigTextView;
}

const MovieView: React.FC<Props> = ({ MovieMain, textConfig }) => {
  // Logica de aleatoridad
  const random_number = Math.floor(Math.random() * MovieMain.length);
  const movie: any = MovieMain[random_number];
  return (
    <div className="relative  w-screen   md:h-110 ">
      <ViewImage movieMain={movie.backdrop_path} />
      <TextView textConfig={textConfig} MovieMain={movie} />
    </div>
  );
};

export default MovieView;
