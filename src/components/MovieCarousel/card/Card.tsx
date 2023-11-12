import TMDbAPI from "@/utils/Api/themoviedb";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import "@/styles/gradiant.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type typeThisIs = "movie" | "tv";

interface Props {
  movie: any;
  thisIs: "movie" | "tv";
}

const Card: React.FC<Props> = ({ movie, thisIs }) => {
  const val = thisIs === "movie";
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout: NodeJS.Timeout;
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 1000); // 1 segundos
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  // Limpia el temporizador cuando el componente se desmonta
  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout);
    };
  }, []);
  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className={`flex    `}
    >
      {/* {isHovered ? ( */}
      <Component2 movie={movie} thisIs={thisIs} />
      {/* ) : ( */}
      {/* <Component1 movie={movie} thisIs={thisIs} /> */}
      {/* )} */}
    </div>
  );
};

const Component1: React.FC<Props> = ({ movie, thisIs }) => {
  const val = thisIs === "movie";
  return (
    <div className=" h-[calc(15rem+5vw)] w-full  transition-transform group duration-300 ">
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
    </div>
  );
};
const Component2: React.FC<Props> = ({ movie, thisIs }) => {
  const val = thisIs === "movie";
  console.log(movie);
  return (
    <div
      className={` h-[calc(15rem+5vw)]  m-1 bg-neutral-600 ${""} grid grid-cols-row-2cg   w-full transition-transform  duration-300 `}
    >
      <div className="relative  m-0">
        <Image
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover "
          src={TMDbAPI.makeImageTmdbUrl(movie.backdrop_path)}
          fill
          alt=""
        />
        L
      </div>
      <div className="fadeIn  hover:bg-opacity-50  flex flex-col    w-full m-0">
        <Link className="" href={`/watch/${thisIs}/${movie.id}`}>
          Ir
        </Link>
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
      </div>
    </div>
  );
};
export default Card;
