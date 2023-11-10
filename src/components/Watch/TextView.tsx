import TMDbAPI from "@/utils/Api/themoviedb";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

interface Props {
  data: any;
  isThis?: "tv" | "movie";
}
const TextViewWatch: React.FC<Props> = ({ data, isThis }) => {
  return (
    <div className=" w-11/12 flex gap-3 flex-col my-10 items-center">
      <div className="py-4">
        {/* Nombre de la pelicula */}
        <h2 className="text-neutral-300 text-3xl">
          {isThis === "movie" ? data.title : data.name}
        </h2>
      </div>
      <div className="w-11/12 p-2 text-center">
        {/* Descripcion  */}
        <p className="text-neutral-400">{data.overview}</p>
      </div>
      <div className="w-full">
        <ul className=" flex gap-2">
          {/* Lista de generos */}
          {data.genres.map((g: { id: number; name: string }) => (
            <li
              className="bg-neutral-400 text-xs font-bold text-neutral-950 rounded-lg px-2"
              key={g.id}
            >
              {g.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full items-center gap-1">
        {/* Puntos de Raiting  */}
        <p className="text-yellow-400">
          <AiFillStar />
        </p>
        <p className="text-neutral-400">{data.vote_average.toFixed(1)}</p>
      </div>
      <div className="w-full flex gap-2 items-center">
        {/* Fecha de lanzamiento */}
        <p className="text-neutral-500">Fecha de lanzamiento:</p>
        <p className="text-neutral-400">{data.release_date}</p>
      </div>
      <div className="w-full">
        <ul className="gap-2 flex">
          {/* Lenguaje disponible */}
          <p className="text-neutral-500">Lenguajes disponibles:</p>
          {data.spoken_languages.map((l: any, i: number) => (
            <li className="text-neutral-400" key={i}>
              {l.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        {/* Pagina web */}
        {data.homepage && (
          <a
            className="text-blue-800 hover:text-blue-700"
            href={data.homepage}
            target="_blank"
          >
            Pagina oficial
          </a>
        )}
      </div>
      <div className="w-full">
        <ul className=" flex flex-wrap items-center  justify-end gap-5">
          {data.production_companies.map((pc: any) => (
            <>
              {pc.logo_path && (
                <li className="bg-neutral-300 rounded p-2" key={pc.id}>
                  <Image
                    width={50}
                    height={50}
                    alt="Error"
                    src={TMDbAPI.makeImageTmdbUrl(pc.logo_path)}
                  />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextViewWatch;
