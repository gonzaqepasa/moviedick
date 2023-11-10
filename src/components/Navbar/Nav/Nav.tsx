import Link from "next/link";
import User from "../../User/User";
import genres from "../../../utils/genresConfig/genres.json";
import { Dispatch, SetStateAction } from "react";
import BtnNavRenderList from "./btn/BtnNavRenderList";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav
        className={`text-white  flex flex-col items-start pt-10 h-screen bg-neutral-900 ${` md:bg-transparent md:h-auto md:px-2 md:flex-row-reverse md:justify-between md:items-center md:static md:pt-0 right-0 md:w-full`} w-64 transition top-0 left-0  absolute ${
          isOpen ? "-translate-x-0 " : "-translate-x-full md:-translate-x-0 "
        }`}
      >
        <User />
        <div className=" overflow-custom-nav flex flex-col md:flex-row w-full  p-0 overflow-y-scroll">
          <BtnNavRenderList
            genresFor="movie"
            genresToRender={genres.genresMovies}
            name={"Peliculas"}
          />
          <BtnNavRenderList
            genresFor="tv"
            genresToRender={genres.genresSeries}
            name={"Series"}
          />
        </div>
      </nav>
      {isOpen && (
        <button
          className="bg-black/80 md:hidden fixed cursor-default top-0 -z-10  left-0 h-full w-full"
          onClick={() => setIsOpen(false)}
        />
      )}{" "}
    </>
  );
};

export default Nav;
