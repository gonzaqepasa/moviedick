"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const MensajeTemporal = () => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Desmontar el componente después de 3 segundos
      // Puedes realizar cualquier acción adicional aquí antes de desmontar
      // Por ejemplo, puedes realizar una acción de desplazamiento hacia abajo
      // antes de desmontar el componente
      setRender(false);
    }, 3000);

    // Devolver una función de limpieza para desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {render && (
        <div className="fadeIn hidden lg:flex w-full  justify-center fixed z-10 bottom-10">
          <p className="bg-neutral-900/80 p-2 flex items-center rounded">
            Desplazar hacia abajo
            <MdOutlineKeyboardDoubleArrowDown className="text-xl" />
          </p>
        </div>
      )}
    </>
  );
};

export default MensajeTemporal;
