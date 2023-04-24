import { useDispatch } from "react-redux";

import { toggleWindows, toggleStyles } from "../../redux/styleSlice";

const Settings = () => {
  const dispatch = useDispatch();

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "settings", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  return (
    <>
      <div className="fixed right-0 top-12 z-[2] h-full w-[200px] overflow-x-hidden bg-[#111] pt-14 duration-[0.5s]">
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
        className="fixed z-[1] h-full w-full bg-transparent"
      ></div>
    </>
  );
};

export default Settings;
