import Link from "next/link";
import "./navMobile.css";
interface Props {
  genresToRender: { name: string; id: number }[];
  name: string;
  genresFor: string;
}

const BtnNavRenderList: React.FC<Props> = ({
  genresToRender,
  name,
  genresFor,
}) => {
  return (
    <div className="  group  md:flex p-0   md:justify-center mobileConfigBox">
      <Link
        href={"/search"}
        className="nameRenderNav  md:transition md:group-hover:text-neutral-400 class text-neutral-300"
      >
        {name}
      </Link>
      <ul
        className="md:hidden md:group-hover:flex md:flex-row md:max-w-lg md:border-neutral-500 md:border md:shadow  md:rounded-md  md:flex-wrap  md:justify-center fadeIn md:fixed md:p-3 md:gap-2 md:top-9
       md:bg-neutral-950/90 "
      >
        {genresToRender.map((m) => (
          <li
            className=" listRender hover:scale-105 text-neutral-300 "
            key={m.id}
          >
            <Link href={`/browse/genre/${genresFor}/${m.id}`}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BtnNavRenderList;
