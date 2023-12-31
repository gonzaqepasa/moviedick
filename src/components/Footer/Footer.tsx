import Image from "next/image";
import Logo from "@/utils/LogoBlack.svg";
import Link from "next/link";
import genres from "@/utils/genresConfig/genres.json";
import "./effect-1.css";
const Footer = () => {
  return (
    <>
      <footer className="h-80 flex flex-col md:flex-row items-center relative flex-wrap justify-evenly bg-footer">
        <div className="grid  place-items-center ">
          <Link href={"/browse"} className="">
            <Image src={Logo} width={150} alt="err" />
          </Link>
          <div className="flex gap-2">
            <p>Ins</p>
            <p>Git</p>
            <p>Link</p>
          </div>
        </div>
        <div className="flex">
          <nav className="flex  gap-2">
            <Link className="hover:shadow  effect-1" href={"/browse"}>
              Inicio
            </Link>
            <Link
              className="hover:drop-shadow-sm effect-1"
              href={`/browse/genre/movie/${genres.genresMovies[0].id}`}
            >
              Peliculas
            </Link>
            <Link
              className="hover:drop-shadow-sm effect-1"
              href={`/browse/genre/tv/${genres.genresSeries[0].id}`}
            >
              Series
            </Link>
          </nav>
        </div>
        <div className="w-full absolute bottom-0 ">
          <p className="text-xs  text-neutral-600 font-extralight ml-2">
            Gonzalo Martinez 2023
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
