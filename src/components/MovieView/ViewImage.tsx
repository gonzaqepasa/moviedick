import Image from "next/image";
import TMDbAPI from "@/utils/Api/themoviedb";
import degradado_negro from "./svg/degradado.svg";

export type typesConfigImageView = {
  topHeight?: boolean;
  gradiant?: boolean;
};

interface Props {
  movieMain: any;
  configImage?: typesConfigImageView;
}

const ViewImage: React.FC<Props> = ({ movieMain, configImage }) => {
  // const image = `https://image.tmdb.org/t/p/original${movies.results[10].backdrop_path}`;

  return (
    <div
      className={`  relative w-screen  ${
        configImage?.topHeight ? "h-[calc(100vh-40vh)] md:h-[calc(100vh-25vh)]" : "h-[calc(100vh-50vh)]"
      } `}
    >
      <Image
        priority
        className="object-cover object-bottom lg:object-top  "
        fill
        // src={makeImageTmdbUrl(movieMain, "original")}
        src={TMDbAPI.makeImageTmdbUrl(movieMain)}
        alt="error"
      />

      {configImage?.gradiant && (
        <Image
          src={degradado_negro}
          alt=""
          className="object-cover object-bottom"
          fill
        />
      )}
    </div>
  );
};

export default ViewImage;
