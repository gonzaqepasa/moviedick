import Image from "next/image";
import Logo from "@/utils/Logo.svg";
import spinload from "@/utils/spinload.svg";

function Loading() {
  return (
    <div
      className={`bg-neutral-900 h-screen w-screen fixed z-50 flex  items-center flex-col  justify-center `}
    >
      <div className="flex flex-col fadeIn items-center">
        <Image width={200} src={Logo} alt="asd" />
        <Image width={50} src={spinload} alt="asd" />
      </div>
    </div>
  );
}

export default Loading;
