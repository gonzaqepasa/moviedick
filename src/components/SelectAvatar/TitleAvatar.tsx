const TitleAvatar = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className=" flex flex-col items-center fadeIn  px-2"
    >
      <h3 className={`text-xl`}>Crea tu avatar</h3>
      <p className="text-sm font-light text-center my-1 text-neutral-400">
        Elige un avatar y un nombre para poder navegar por la pagina, tambien
        puedes elegir entrar de forma anonima.
      </p>
      <p className=" my-2 text-xs   text-neutral-300">{`(Estos datos solo se almacen en el LocalStorage)`}</p>
    </div>
  );
};

export default TitleAvatar;
