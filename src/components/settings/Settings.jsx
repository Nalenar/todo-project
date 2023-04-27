import { useDispatch } from "react-redux";

import { toggleWindows, toggleStyles } from "../../redux/commonSlice";

const Settings = ({ settings }) => {
  const dispatch = useDispatch();

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "settings", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  return (
    <>
      <div
        className={`fixed z-[2] h-full w-[214px] overflow-x-hidden bg-white pt-5 font-roboto shadow-2xl transition-all duration-300 ${
          settings ? "right-0" : "-right-full"
        }`}
      >
        <a
          href="#"
          className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        >
          Настроить
        </a>
        <a
          href="#"
          className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        >
          Настроить
        </a>
        <a
          href="#"
          className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        >
          About
        </a>
        <a
          href="#"
          className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        >
          About
        </a>
      </div>
      {/* handles click away */}
      <div
        onClick={handleClickAway}
        className={`fixed z-[1] h-full w-full bg-transparent transition-all duration-0 ${
          settings ? "right-0" : "-right-full"
        }`}
      ></div>
    </>
  );
};

export default Settings;
