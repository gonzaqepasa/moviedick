import TMDbAPI from "@/utils/Api/themoviedb";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import "@/styles/gradiant.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export type typeThisIs = "movie" | "tv";

interface Props {
  movie: any;
  thisIs: "movie" | "tv";
}

const Card: React.FC<Props> = ({ movie, thisIs }) => {
  const val = thisIs === "movie";

  return (
    <div className="flex h-64 translate group  hover:scale-105 hover:shadow  shadow-cyan-500 transition-transform duration-300">
      <div className="relative h-full w-full m-0">
        <Image
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover p-1"
          src={TMDbAPI.makeImageTmdbUrl(movie.poster_path)}
          fill
          alt=""
        />
        L
      </div>
      <div className="fadeIn card-deg hover:bg-opacity-50 hidden group-hover:flex flex-col-reverse absolute h-full p-2 w-full m-0">
        <Link
          className="w-full text-neutral-200 transition-colors hover:text-cyan-400 "
          href={`/watch/${thisIs}/${movie.id}`}
        >
          <div className="w-full  ">
            <p className="text-sm ">{val ? movie.title : movie.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-yellow-300">
              <AiFillStar />
            </p>
            <p className=" text-xs font-semibold text-neutral-400">
              {movie.vote_average}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
