import User from "../User/User";
import genres from "./genres.json";
import { Dispatch, SetStateAction, useState } from "react";

interface typesNav {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Nav({ isOpen, setIsOpen }: typesNav) {
  return (
    <>
      <nav
        className={`text-white  overflow-y-hidden flex flex-col  items-start pt-10 min-h-screen w-64 transition top-0 bg-neutral-900 absolute ${
          isOpen ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <User />
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
