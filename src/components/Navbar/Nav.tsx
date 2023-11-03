import User from "../User/User";
import genres from "./genres.json";
import { useState } from "react";

interface typesNav {
  isOpen: boolean;
}

function Nav({ isOpen }: typesNav) {
  return (
    <nav
      className={`text-white  overflow-y-hidden flex flex-col  items-center pt-10 min-h-screen w-64 transition top-0 bg-neutral-900 absolute ${
        isOpen ? "-translate-x-0 " : "-translate-x-full"
      }`}
    >
      <User />
    </nav>
  );
}

export default Nav;
