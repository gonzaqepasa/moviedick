import { redirect } from "next/navigation";

const localStorageUtil = {
  avatarCheck: () => {
    // Verificar si el avatar está presente en el almacenamiento local
    const avatar = localStorage.getItem("avatar");
    // Si el avatar no existe, redirigir a la página de selección de avatar
    if (!avatar) {
      redirect("/avatar");
    } else {
      // saveAvatar();
      redirect("/");
    }
  },
  avatarFromSelect: () => {},
};

export default localStorageUtil;
