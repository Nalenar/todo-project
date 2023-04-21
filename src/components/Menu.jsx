import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Menu = (props) => {
  return (
    <div className="fixed left-0 top-12 z-[1] h-full w-[214px] overflow-x-hidden bg-white pt-5 shadow-2xl">
      <Link
        to="/app"
        className="block py-2 pl-8 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040]"
        onClick={() => props.onLinkClick(false)}
      >
        Мой день
      </Link>
      <Link
        to={"/app/important"}
        className="block py-2 pl-8 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        onClick={() => props.onLinkClick(false)}
      >
        Важное
      </Link>

      <hr className="border-1 mx-4 my-2 border-gray-300" />

      <form>
        <div className="flex w-full">
          <button type="submit" className="mx-1">
            <Icon
              icon="ion:add-circle-outline"
              width={25}
              color="#3b82f6"
              className="cursor-pointer"
            />
          </button>
            <input
              type="text"
              placeholder="Создать категорию"
              className="form-input w-full mr-1 h-10 border-none pl-0 text-lg focus:ring-transparent placeholder:text-blue-500"
            />
        </div>
      </form>
    </div>
  );
};

export default Menu;
