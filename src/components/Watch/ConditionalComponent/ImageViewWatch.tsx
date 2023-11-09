import TMDbAPI from "@/utils/Api/themoviedb";
import Image from "next/image";

interface Props {
  data: {
    backdrop_path: string;
  };
}

const ImageViewWatch: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-screen relative h-[calc(100vh-20vh)]">
      <Image
        priority
        className="object-cover  object-bottom lg:object-top  "
        fill
        alt="Error"
        src={TMDbAPI.makeImageTmdbUrl(data.backdrop_path)}
      />
    </div>
  );
};

export default ImageViewWatch;
