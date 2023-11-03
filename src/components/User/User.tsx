"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteAvatar } from "../SelectAvatar/logic_avatar/logic";

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
    <div>
      {avatar && (
        <span>
          <button
            onClick={() => {
              deleteAvatar();
              router.push("/avatar");
            }}
          >
            Eliminar avatar
          </button>
          <p>{avatar.name}</p>
        </span>
      )}
    </div>
  );
};

export default User;
