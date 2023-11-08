"use client";

import { typesGenres } from "@/utils/genresConfig/typesGenres";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  genres: typesGenres[];
  actualGenre: number;
  genresFor: "movie" | "tv";
}
const FilterGenrePage: React.FC<Props> = ({
  genres,
  actualGenre,
  genresFor,
}) => {
  const router = useRouter();

  const handleChange = ({ id }: { id: string }) => {
    router.push(`/browse/genre/${genresFor}/${id}`);
  };
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="selectGenre" className="text-neutral-200">
        Seleccionar genero
      </label>
      <select
        id="selectGenre"
        className={`rounded-md p-1 transition text-neutral-300 focus:outline bg-neutral-900 outline-cyan-500`}
        value={actualGenre}
        onChange={(e) => {
          handleChange({ id: e.target.value });
        }}
        name=""
      >
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterGenrePage;
