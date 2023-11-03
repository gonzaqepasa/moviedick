import { typesErrorInputName } from "./NameInput";

interface Props {
  name: string;
  error: typesErrorInputName;
}

const BtnSubmitAvatar: React.FC<Props> = ({ name, error }) => {
  const disabled_btn: boolean = error.val || name.length < 3;
  return (
    <div className={`flex justify-center fadeIn`}>
      <button
        className={` py-2 px-6 rounded transition-all avatar-btn-main duration-200 ${
          disabled_btn && " opacity-50 "
        }`}
        type="submit"
        disabled={disabled_btn}
      >
        Crear Avatar
      </button>
    </div>
  );
};

export default BtnSubmitAvatar;
