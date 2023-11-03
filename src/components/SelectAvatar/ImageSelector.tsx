import { Dispatch, SetStateAction } from "react";
import { typesAllAvatarsArray } from "./avatar-icon";
import Image from "next/image";

interface Props {
  allAvatarsImageArray: typesAllAvatarsArray;
  setImg: Dispatch<SetStateAction<number>>;
  img: number;
}

const ImageSelectorAvatar: React.FC<Props> = ({
  allAvatarsImageArray,
  setImg,
  img,
}) => {
  return (
    <div className="">
      <ol className="grid grid-cols-3 gap-3 p-2 py-11 max-w-full px-3 ">
        {allAvatarsImageArray.map((a, i) => (
          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay={`${i + 2}00`}
            className="  m-2 flex items-center justify-center "
            key={i}
            id={a.name}
            onClick={() => setImg(i)}
          >
            <Image
              className={` rounded-full ${
                i === img
                  ? `avatar-shadow-active scale-110`
                  : `avatar-shadow active:scale-100 hover:scale-105`
              }  transition duration-100 ease-in-out`}
              height={70}
              src={a.img}
              alt="erro"
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ImageSelectorAvatar;
