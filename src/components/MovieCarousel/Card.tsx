import TMDbAPI from "@/utils/Api/themoviedb";
import Image from "next/image";

interface Props {
  movie: any;
}

const Card: React.FC<Props> = ({ movie }) => {
  return (
    <div className="flex h-64 translate   hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <div className="relative h-full w-full m-0">
        <Image
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover p-1"
          src={TMDbAPI.makeImageTmdbUrl(movie.poster_path)}
          fill
          alt=""
        />
      </div>
      <div className="hover:bg-red-600 hover:bg-opacity-50  absolute h-full w-full m-0">
        {" "}
      </div>
    </div>
  );
};

export default Card;
