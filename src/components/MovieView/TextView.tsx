import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export type typesConfigTextView = {
  viewOverview?: boolean;
  viewTitle?: boolean;
  viewTitleSection?: false | "Series" | "Peliculas";
  viewVote?: boolean;
  viewAtp?: boolean;
  viewGenres?: boolean;
  viewReleaseDate?: boolean;
  overviewComplete?: boolean;
};

interface Props {
  MovieMain: any;
  textConfig?: typesConfigTextView;
}
const TextView: React.FC<Props> = async ({ MovieMain, textConfig }) => {
  const data = MovieMain;
  return (
    <div
      className=" h-full flex flex-col items-start md:flex-col-reverse p-4  md:p-10 gradiante md:-translate-y-0
    -translate-y-5 md:top-0  md:absolute z-20 fadeIn"
    >
      {textConfig?.viewTitleSection && (
        <div className="flex w-full   items-center justify-center">
          <h2 className="font-medium   bg-neutral-950 text-center py-2 border-cyan-600 text-neutral-300 rounded px-10    text-3xl">
            {textConfig.viewTitleSection}
          </h2>
        </div>
      )}

      {textConfig?.viewOverview && (
        <div className=" max-w-xl ">
          {textConfig.overviewComplete ? (
            <>
              <p className=" text-neutral-300 font-light text-sm">
                {data.overview}
              </p>
            </>
          ) : (
            <>
              <p className="text-neutral-300 font-light text-sm">
                {data.overview.length > 150
                  ? data.overview.slice(0, 150) + "..."
                  : data.overview}
              </p>
              <Link href={`/watch/movie/${MovieMain.id}`} className=" w-16 main-color-text text-sm hover:brightness-125 transition">
                {"ver más"}
              </Link>
            </>
          )}
        </div>
      )}
      {textConfig?.viewTitle && (
        <div className=" ">
          <h2 className="text-2xl text-neutral-300 font-bold md:text-3xl">
            {data.title}
          </h2>
        </div>
      )}

      {textConfig?.viewVote && (
        <div className="flex items-center my-3">
          <div className=" flex items-center my-1 px-1 rounded-lg  bg-green-700">
            <AiFillStar className="text-neutral-300 text-xs" />
            <p className="text-neutral-200 px-1 text-sm">{data.vote_average}</p>
          </div>
        </div>
      )}
      {textConfig?.viewAtp && (
        <div>
          <p className="text-sm px-2 text-neutral-100">
            {data.adult ? "Adultos" : "Apto para todo publico"}
          </p>
        </div>
      )}
      {textConfig?.viewGenres && (
        <div className="flex my-1">
          {data.genre_ids.map((el: any) => (
            <div key={el.id} className="mr-2 rounded bg-neutral-200 px-1">
              <p className="text-xs text-neutral-950  ">{el}</p>
            </div>
          ))}
        </div>
      )}
      {textConfig?.viewReleaseDate && (
        <div className="flex items-center ">
          <p className="text-sm">Fecha de estreno:</p>
          <p className="text-sm px-1 text-neutral-500 font-semibold">
            {data.release_date}
          </p>
        </div>
      )}
    </div>
  );
};

export default TextView;
