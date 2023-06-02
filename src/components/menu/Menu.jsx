import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { toggleWindows, toggleStyles } from "../../redux/commonSlice";

import MenuList from "./MenuList";

const Menu = ({ menu }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLinkClick = () => {
    dispatch(toggleWindows({ window: "menu", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "menu", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  return (
    <>
      <div
        className={`fixed z-[2]  h-full w-[214px] overflow-x-hidden bg-white pt-5 font-roboto shadow-2xl transition-all duration-300 dark:bg-gray-500 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        <Link
          to="/app/"
          className="mx-1 flex items-center pl-3 hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={handleLinkClick}
        >
          <Icon
            icon="line-md:sunny-outline"
            width={25}
            className="text-[#818181] dark:text-gray-200"
          />
          <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040] dark:text-gray-200">
            {t("Menu.day")}
          </span>
        </Link>
        <Link
          className="mx-1 flex items-center pl-3 hover:bg-gray-100 dark:hover:bg-gray-600"
          to="/app/important"
          onClick={handleLinkClick}
        >
          <Icon
            icon="line-md:star-alt"
            width={23}
            className="text-[#818181] dark:text-gray-200"
          />
          <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040] dark:text-gray-200">
            {t("Menu.important")}
          </span>
        </Link>
        <Link
          className="mx-1 flex items-center pl-3 hover:bg-gray-100 dark:hover:bg-gray-600"
          to="/app/tasks"
          onClick={handleLinkClick}
        >
          <Icon
            icon="line-md:home-md"
            width={23}
            className="text-[#818181] dark:text-gray-200"
          />
          <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040] dark:text-gray-200">
            {t("Menu.tasks")}
          </span>
        </Link>

        <hr className="border-1 mx-4 my-2 border-gray-300 dark:border-gray-400" />

        <MenuList onLinkClick={handleLinkClick} />
      </div>

      {/* handles click away */}
      <div
        onClick={handleClickAway}
        className={`fixed z-[1] h-full w-full bg-transparent transition-all duration-0 ${
          menu ? "left-0" : "-left-full"
        }`}
      ></div>
    </>
  );
};
export default Menu;
