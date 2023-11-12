"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import genres from "@/utils/genresConfig/genres.json";
import Logo from "@/utils/Logo.svg";
import Image from "next/image";
import "./overflow-nav.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      className="bg-neutral-950/80"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          className="text-neutral-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <Link href={"/browse"} className="py-3 ">
          <Image height={23} alt="Error" src={Logo} />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href={"/browse"} className="py-3 ">
            <Image height={23} alt="Error" src={Logo} />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          {/* Boton para las peliculas  */}
          <Dropdown className="bg-neutral-950/95">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="border-none text-neutral-200"
              >
                Peliculas
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className="overflow-y-scroll overflow-custom-nav h-44 "
            >
              {genres.genresMovies.map((m, i) => (
                <DropdownItem key="new" className="text-neutral-300">
                  {m.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>{" "}
          {/* Boton para las series  */}
          <Dropdown className="bg-neutral-950/95">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="border-none text-neutral-200"
              >
                Series
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className="overflow-y-scroll overflow-custom-nav h-44 "
            >
              {genres.genresSeries.map((m, i) => (
                <DropdownItem key="new" className="text-neutral-300">
                  {m.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black/50">
        <p className="text-white font-bold text-xl">Peliculas</p>
        {genres.genresMovies.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full px-2 text-neutral-400 hover:scale-105 transition-transform hover:text-cyan-600 "
              href="#"
              size="md"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <p className="text-white font-bold text-xl">Series</p>
        {genres.genresSeries.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full px-2   text-neutral-400 hover:scale-105 transition-transform hover:text-cyan-600 "
              href="#"
              size="md"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
