"use client";
import Image from "next/image";
import Logo from "@/utils/Logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true); // Si el desplazamiento es 0, estamos en la parte superior
      } else {
        setIsTop(false); // Si hay un desplazamiento, no estamos en la parte superior
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex items-center ease-in-out duration-700 transition-colors ${
        !isTop ? "bg-neutral-900" : " bg-neutral-900/10"
      }  w-screen  fixed top-0 z-50 `}
    >
      <Nav isOpen={isOpen} />

      <div className="mx-1 drop-shadow-lg">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={25}
          easing="ease-in"
          duration={0.2}
          color="white"
        />
      </div>
      <div className="py-3 ">
        <Image height={23} alt="Error" src={Logo} />
      </div>
    </div>
  );
}

export default Navbar;
