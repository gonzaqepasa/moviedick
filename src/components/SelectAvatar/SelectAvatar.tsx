"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { allAvatarsImageArray } from "./avatar-icon";
import NameInput, { typesErrorInputName } from "./NameInput";
import TitleAvatar from "./TitleAvatar";
import ImageSelectorAvatar from "./ImageSelector";
import BtnSubmitAvatar from "./BtnSubmit";
import Loading from "@/app/browse/loading";
import { createAvatar } from "./logic_avatar/logic";
import Image from "next/image";
import Logo from "@/utils/Logo.svg";

const SelectAvatar = () => {
  const router = useRouter();

  // const avatar = useSelector((state: RootState) => state.avatar);
  /////////// Logica del avatar /////////
  // Checkea si existe un avatar en localStorage
  // Si existe te redirige hacia el Home
  const [avatar, setAvatar] = useState(false);

  useEffect(() => {
    const localAvatar = localStorage.getItem("avatar");
    localAvatar ? router.push("/") : setAvatar(true);
  }, []);
  /////////////////////////////////////////////
  // Estados para los inputs de avatar
  const [name, setName] = useState("");
  const [img, setImg] = useState<number>(0);
  const [error, setError] = useState<typesErrorInputName>({
    val: false,
    msg: "",
  });

  return (
    <main className=" min-h-screen  flex flex-col items-center justify-center ">
      {/* Aquí puedes agregar la interfaz para que los usuarios seleccionen su avatar */}

      <Image width={200} src={Logo} alt="err" />

      {avatar ? (
        <form
          className=" flex flex-col items-center w-11/12"
          onSubmit={(e) => {
            e.preventDefault();
            createAvatar({ name, img }, setError);
            router.push("/");
          }}
        >
          <TitleAvatar />
          <NameInput
            name={name}
            setName={setName}
            error={error}
            setError={setError}
          />
          {/* Agrega las opciones de avatar */}
          <ImageSelectorAvatar
            img={img}
            setImg={setImg}
            allAvatarsImageArray={allAvatarsImageArray}
          />
          <BtnSubmitAvatar name={name} error={error} />
        </form>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default SelectAvatar;
