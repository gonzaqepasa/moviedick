import Link from "next/link";
import "./navMobile.css";
interface Props {
  genresToRender: { name: string; id: number }[];
  name: string;
}

const BtnNavRenderList: React.FC<Props> = ({ genresToRender, name }) => {
  return (
    <div className="  group  md:flex p-0   md:justify-center mobileConfigBox">
      <Link href={'/search'} className="nameRenderNav md:text-neutral-300 md:transition md:group-hover:text-cyan-600 class text-neutral-200">{name}</Link>
      <ul
        className="md:hidden md:group-hover:flex md:flex-row md:max-w-xl md:border-neutral-500 md:border md:shadow  md:rounded-md  md:flex-wrap  md:justify-center fadeIn md:fixed md:p-3 md:gap-2 md:top-8
       md:bg-neutral-600 "
      >
        {genresToRender.map((m) => (
          <li className=" listRender text-neutral-300 " key={m.id}>
            <Link href={"/"}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BtnNavRenderList;
