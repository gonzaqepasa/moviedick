import mapache from "./01-mapache.svg";
import oso from "./02-oso.svg";
import venado from "./03-venado.svg";
import pubg from "./04-pubg.svg";
import leon from "./05-leon.svg";
import zorro from "./06-zorro.svg";

export const allAvatarsImageObj = {
  mapache: { name: "mapache", img: mapache },
  oso: { name: "oso", img: oso },
  pubg: { name: "pubg", img: pubg },
  venado: { name: "venado", img: venado },
  leon: { name: "leon", img: leon },
  zorro: { name: "zorro", img: zorro },
};

export const allAvatarsImageArray = Object.values(allAvatarsImageObj);
export type typesAllAvatarsArray = typeof allAvatarsImageArray;

export const searchAvatar = (index: number): typesAllAvatarsArray[number] => {
  return allAvatarsImageArray[index];
};
