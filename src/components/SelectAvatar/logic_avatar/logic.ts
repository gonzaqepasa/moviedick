import { typeUser } from "@/components/User/User";
import { typesErrorInputName } from "../NameInput";

export function deleteAvatar() {
  localStorage.removeItem("avatar");
}

export // Para crear un avatar nuevo
// Lo guarda en localStorage y ademas lo guarda en un estado global
type typeCreateAvatar = Pick<typeUser, "name" | "img">;
export const createAvatar = (
  { name, img }: typeCreateAvatar,
  setError: ({}: typesErrorInputName) => void
) => {
  const newAvatar = { name, img, avaliable: true };
  if (name.length < 2)
    return setError({
      val: true,
      msg: "El nombre debe ser mayor a 3 letras",
    });
  localStorage.setItem("avatar", JSON.stringify(newAvatar));
};
