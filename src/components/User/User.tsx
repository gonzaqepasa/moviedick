"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteAvatar } from "../SelectAvatar/logic_avatar/logic";
import Image from "next/image";
import { searchAvatar } from "../SelectAvatar/avatar-icon";
import { Avatar } from "@nextui-org/react";
export interface typeUser {
  name: string;
  img: number;
  avaliable: boolean;
}

const User = () => {
  const router = useRouter();
  /////////////////////////////////////////////////
  // Para detectar si existe un Avatar
  // Primero mira en localStorage
  // Si no existe te envia a /avatar
  // Si existe checkea que no este ya guardado en global y lo guarda
  const [avatar, setAvatar] = useState<typeUser>();
  useEffect(() => {
    const avatarLocal = localStorage.getItem("avatar");
    avatarLocal === null
      ? router.push("/avatar")
      : setAvatar(JSON.parse(avatarLocal));
  }, []);

  /////////////////////////////////////////////////////
  return (
    <>
      {avatar && (
        <div className="flex p-4 md:p-0 md:py-2 md:mr-10 items-start justify-center ">
          <Image
            className="border-2 rounded-full"
            height={40}
            src={searchAvatar(avatar.img).img}
            alt="err"
          />

          <div className="flex flex-col items-start ml-2">
            <p className="text-neutral-200 ">{avatar.name}</p>
            <button
              className="text-xs w-24 font-normal text-start transition-colors text-neutral-400  hover:text-red-500"
              onClick={() => {
                deleteAvatar();
                router.push("/avatar");
              }}
            >
              Eliminar avatar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
