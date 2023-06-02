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
    const htmlElement = document.documentElement;
    const bodyElement = document.querySelector("body");

    if (theme === "light") {
      htmlElement.classList.add("dark");
      bodyElement.style.backgroundColor = "#323232";
      dispatch(toggleStyles({ style: "theme", string: "dark" }));
    } else if (theme === "dark") {
      htmlElement.classList.remove("dark");
      bodyElement.style.backgroundColor = "#efefef";
      dispatch(toggleStyles({ style: "theme", string: "light" }));
    }
  };

  return (
    <>
      <div
        className={`fixed z-[2] h-full w-[214px] overflow-x-hidden bg-white pt-5 font-roboto shadow-2xl transition-all duration-300 dark:bg-gray-500 ${
          settings ? "right-0" : "-right-full"
        }`}
      >
        <div
          className="mx-1 flex cursor-pointer items-center pl-3 hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={handleToggleDarkmode}
        >
          <Icon
            icon="line-md:moon-filled"
            width={25}
            className="text-[#818181] dark:text-gray-200"
          />
          <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040] dark:text-gray-200">
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
            <Icon
              icon="line-md:circle-to-confirm-circle-transition"
              width={25}
              className="ml-auto mr-3 text-gray-200"
            />
          )}
        </div>
        <div className="mx-1 flex cursor-pointer items-center pl-3 hover:bg-gray-100 dark:hover:bg-gray-600">
          <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] dark:text-gray-200">
            Язык
          </span>
          <div className="ml-auto mr-3 flex items-center justify-center">
            <Icon
              icon="circle-flags:ru"
              width={30}
              className="mr-3 dark:rounded-full dark:border-2 dark:border-gray-200"
            />
            <Icon
              icon="circle-flags:us"
              width={30}
              className="dark:rounded-full dark:border-2 dark:border-gray-200"
            />
          </div>
        </div>
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
