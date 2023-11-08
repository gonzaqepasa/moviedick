import Image from "next/image";
import TMDbAPI from "@/utils/Api/themoviedb";
import degradado_negro from "./svg/degradado.svg";

export type typesConfigImageView = {
  topHeight?: boolean;
};

interface Props {
  movieMain: any;
  configImage?: typesConfigImageView;
}

const ViewImage: React.FC<Props> = ({ movieMain, configImage }) => {
  // const image = `https://image.tmdb.org/t/p/original${movies.results[10].backdrop_path}`;

  return (
    <div
      className={`  relative w-screen h-56  ${
        configImage?.topHeight ? "h-[calc(100vh-10vh)]" : "h-[calc(100vh-30vh)]"
      } `}
    >
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
