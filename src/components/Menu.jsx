import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import MenuList from "./menu/MenuList";

const Menu = (props) => {
  return (
    <div className="fixed left-0 top-12 z-[1] h-full w-[214px] overflow-x-hidden bg-white pt-5 font-roboto shadow-2xl">
      <Link
        to="/app"
        className="flex items-center pl-3 hover:bg-gray-100"
        onClick={() => props.onLinkClick(false)}
      >
        <Icon icon="ion:sunny-outline" width={25} color="#818181" />
        <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040]">
          Мой день
        </span>
      </Link>
      <Link
        to="/app/important"
        className="flex items-center pl-3 hover:bg-gray-100"
        onClick={() => props.onLinkClick(false)}
      >
        <Icon icon="ion:star-outline" width={23} color="#818181" />
        <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040]">
          Важное
        </span>
      </Link>

      <hr className="border-1 mx-4 my-2 border-gray-300" />

      <MenuList />
    </div>
  );
};

export default Menu;
