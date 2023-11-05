import Link from "next/link";
import User from "../../User/User";
import genres from "../genres.json";
import { Dispatch, SetStateAction } from "react";

interface typesNav {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Nav({ isOpen, setIsOpen }: typesNav) {
  return (
    <>
      <nav
        className={`text-white  flex flex-col  items-start pt-10 h-screen w-64 transition top-0 bg-neutral-900 absolute ${
          isOpen ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <User />
        <div className=" w-full py-2 overflow-custom-nav overflow-y-scroll">
          <div className=" flex flex-col items-start pb-2 px-2">
            <p className="border-b-2 font-bold border-cyan-500">Peliculas</p>
            <ul>
              {genres.genresMovies.map((m) => (
                <li
                  className=" pl-2 hover:text-cyan-400 transition-colors font-extralight "
                  key={m.id}
                >
                  <Link href={"/"}>{m.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col items-start pb-2 px-2">
            <p className="border-b-2 font-bold border-cyan-500">Series</p>
            <ul>
              {genres.genresSeries.map((m) => (
                <li
                  className="pl-2 hover:text-cyan-400 transition-colors  font-extralight"
                  key={m.id}
                >
                  <Link href={"/"}>{m.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && (
        <button
          className="bg-black/80 fixed cursor-default top-0 -z-10  left-0 h-full w-full"
          onClick={() => setIsOpen(false)}
        />
      )}{" "}
    </>
  );
}

export default Nav;
