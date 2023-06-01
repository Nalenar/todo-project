import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import { toggleWindows, toggleStyles } from "../../redux/commonSlice";

const Settings = ({ settings }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.common.styles.theme);

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "settings", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  const handleToggleDarkmode = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      dispatch(toggleStyles({ style: "theme", string: "dark" }));
    } else if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      dispatch(toggleStyles({ style: "theme", string: "light" }));
    }
  };

  return (
    <>
      <div
        className={`fixed z-[2] h-full w-[214px] overflow-x-hidden bg-white pt-5 font-roboto shadow-2xl transition-all duration-300 ${
          settings ? "right-0" : "-right-full"
        }`}
      >
        <div className="mx-1 flex items-center pl-3 hover:bg-gray-100 cursor-pointer" onClick={handleToggleDarkmode}>
          <Icon icon="line-md:moon-filled" color="#818181" width={25} />
          <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040]">
            Темная тема
          </span>
          {theme === "light" ? (
            <Icon
              icon="mdi:circle-outline"
              color="#818181"
              width={25}
              className="ml-auto mr-3"
            />
          ) : (
            <Icon icon="line-md:circle-to-confirm-circle-transition" width={25} color="#818181" className="ml-auto mr-3" />
          )}
        </div>
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
