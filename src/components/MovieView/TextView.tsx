interface Props {
  MovieMain: any;
}
const TextView: React.FC<Props> = async ({ MovieMain }) => {
  // const data = await TMDbAPI.getMovieById(idMovie);
  const data = MovieMain;
  return (
    <div
      className=" h-full w-screen flex flex-col items-start md:flex-col-reverse p-4  md:p-10 gradiante md:-translate-y-0
    -translate-y-5 md:top-0  md:absolute z-20 fadeIn"
    >
      <div className=" max-w-xl ">
        <p className=" text-neutral-300 font-light text-sm">
          {data.overview.length > 150
            ? data.overview.slice(0, 150) + "..."
            : data.overview}
        </p>
        <button className=" w-16 main-color-text text-sm hover:brightness-125 transition">
          {"ver más"}
        </button>
      </div>
      <div className=" ">
        <h2 className="text-2xl text-neutral-300 font-bold md:text-3xl">
          {data.title}
        </h2>
      </div>

      {/* <div className="flex items-center my-3">
        <div className=" flex items-center my-1 px-1 rounded-lg  bg-green-700">
          <AiFillStar className="text-neutral-300 text-xs" />
          <p className="text-neutral-200 px-1 text-sm">{data.vote_average}</p>
        </div>
        <p className="text-sm px-2 text-neutral-100">
          {data.adult ? "Adultos" : "Apto para todo publico"}
        </p>
      </div> */}
      {/* <div className="flex my-1">
        {data.genres.map((el: any) => (
          <div key={el.id} className="mr-2 rounded bg-neutral-200 px-1">
            <p className="text-xs text-neutral-950  ">{el.name}</p>
          </div>
        ))}
      </div> */}
      {/* <div className="flex items-center ">
        <p className="text-sm">Fecha de estreno:</p>
        <p className="text-sm px-1 text-neutral-500 font-semibold">
          {data.release_date}
        </p>
      </div> */}
    </div>
  );
};

export default TextView;
