import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  error: typesErrorInputName;
  setError: Dispatch<SetStateAction<typesErrorInputName>>;
}
export interface typesErrorInputName {
  val: boolean;
  msg: string;
}

const NameInput: React.FC<Props> = ({ name, setName, error, setError }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    name.length > 2 && setError({ val: false, msg: "" });
    setName(e.target.value);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      className="flex justify-center fadeIn  p-1 relative max-w-full w-72"
    >
      {/* <label className="text-sm text-neutral-300 mb-2">Nombre:</label> */}
      <input
        placeholder="Ingrese su nombre..."
        className={`text-white  h-10 rounded px-2 bg-transparent  border-none  bg-gradient-to-t transition from-neutral-700 ${
          error.val
            ? "outline focus:outline focus:outline-red-600 outline-red-600 "
            : "shadow-input-main "
        } `}
        type="text"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      {/* {name.length > 0 && (
        <button
          type="button"
          onClick={() => setName("")}
          className="absolute right-3 h-full "
        >
          X
        </button>
      )} */}
      {error.val && <p className="absolute">{error.msg}</p>}
    </div>
  );
  return;
};

export default NameInput;
