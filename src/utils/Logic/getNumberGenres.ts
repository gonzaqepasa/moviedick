type Str =
  | "Accion"
  | "Aventura"
  | "Animacion"
  | "Comedia"
  | "Terror"
  | "CienciaFiccion";

// Definimos un mapeo de géneros a sus IDs
const genreIdMap: Record<Str, number> = {
  Accion: 28,
  Animacion: 16,
  Aventura: 12,
  CienciaFiccion: 878,
  Comedia: 35,
  Terror: 27,
};

interface TypesGetNumberGenres {
  string: Str[] | Str;
}

export function getNumberGenres(string: Str | Str[]): number | number[] {
  if (typeof string === "string") {
    // Si es un solo string, devolvemos el ID correspondiente
    return genreIdMap[string];
  } else if (Array.isArray(string)) {
    // Si es un array de strings, mapeamos cada uno al ID correspondiente
    return string.map((genre) => genreIdMap[genre]);
  }

  return 0; // Valor predeterminado en caso de que no se cumplan las condiciones anteriores
}
