"use client";
import Image from "next/image";
import Logo from "@/utils/Logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import Nav from "./Nav/Nav";
import { useEffect, useState } from "react";
import "./overflow-nav.css";
import NavDesktop from "./Nav/Nav.jsx";
import Link from "next/link";

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
      className={`flex items-center ease-in-out duration-700 shadow  md:pl-3 transition-colors ${
        !isTop ? "bg-neutral-900" : " bg-neutral-900/50"
      }  w-screen  fixed top-0 z-50 `}
    >
      <div className="mx-1 z-10 md:hidden drop-shadow-lg">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={25}
          easing="ease-in"
          duration={0.2}
          color="white"
        />
      </div>
      <Link href={"/"} className="py-3 ">
        <Image height={23} alt="Error" src={Logo} />
      </Link>

      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Navbar;
