import TMDbAPI from "@/utils/Api/themoviedb";
import Image from "next/image";
import "@/styles/gradiant.css";
import { FiPlay } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Card as CardNext,
  CardHeader,
  CardBody,
  Image as ImageNext,
  Button,
} from "@nextui-org/react";

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
    }, 300); // 1 segundos
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex  hover:scale-105 mx-1  transition-transform rounded py-2 lg:h-[calc(10rem+15vw)] md:h-[calc(10rem+20vw)] h-80 `}
    >
      {isHovered ? (
        <Component3 movie={movie} thisIs={thisIs} />
      ) : (
        <Component1 movie={movie} thisIs={thisIs} />
      )}
    </div>
  );
};

const Component1: React.FC<Props> = ({ movie, thisIs }) => {
  const val = thisIs === "movie";
  return (
    <CardNext className="  h-full w-full fadeIn bg-neutral-800  group duration-300 ">
      <Image
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        alt="Card background"
        className="object-cover shadow-neutral-200 rounded-none "
        src={TMDbAPI.makeImageTmdbUrl(movie.poster_path)}
        fill
      />
    </CardNext>
  );
};

const Component3: React.FC<Props> = ({ movie, thisIs }) => {
  const val = thisIs === "movie";

  return (
    <CardNext
      isDisabled={false}
      radius="sm"
      className="bg-neutral-800     fadeIn  h-full  "
    >
      <CardHeader className="  p-0 flex-col items-start">
        <Link className="" href={`/watch/${thisIs}/${movie.id}`}>
          <ImageNext
            radius="none"
            isZoomed
            alt="Card background"
            className="object-cover  "
            src={TMDbAPI.makeImageTmdbUrl(movie.backdrop_path)}
            width={270}
          />
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible flex items-start  py-2">
        <Link className="" href={`/watch/${thisIs}/${movie.id}`}>
          <Button
            className="p-0 rounded-full flex items-center justify-center min-w-fit w-8 h-8   "
            color="primary"
            variant="bordered"
          >
            <FiPlay />
          </Button>
        </Link>
        <div className="  hover:bg-opacity-50 py-2  flex flex-col  text-neutral-500 h-min  w-full m-0">
          <div className="w-full text-neutral-200  ">
            <p className="text-sm ">{val ? movie.title : movie.name}</p>
          </div>
          <div className="flex  items-center">
            <p className="text-yellow-300 mr-1">
              <AiFillStar />
            </p>
            <p className=" text-xs font-semibold text-neutral-400">
              {movie.vote_average}
            </p>
          </div>
          {movie.release_date && (
            <p className="text-xs">{movie.release_date}</p>
          )}
        </div>
      </CardBody>
    </CardNext>
  );
};
export default Card;
