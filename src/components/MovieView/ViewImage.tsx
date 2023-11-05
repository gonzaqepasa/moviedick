import Image from "next/image";
import TMDbAPI from "@/utils/Api/themoviedb";
import degradado_negro from "./svg/degradado.svg";

interface Props {
  movieMain: any;
}

const ViewImage: React.FC<Props> = ({ movieMain }) => {
  // const image = `https://image.tmdb.org/t/p/original${movies.results[10].backdrop_path}`;

  return (
    <div className="  relative w-screen h-56 md:h-[calc(100vh-5rem)] ">
      <Image
        priority
        className="object-cover  object-bottom lg:object-top  "
        fill
        // src={makeImageTmdbUrl(movieMain, "original")}
        src={TMDbAPI.makeImageTmdbUrl(movieMain)}
        alt="error"
      />

      <Image
        src={degradado_negro}
        alt=""
        className="object-cover object-bottom"
        fill
      />
    </div>
  );
};

export default ViewImage;
