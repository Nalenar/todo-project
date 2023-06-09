import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const MenuItem = (props) => (
  <Link
    to={`/app/${props.id}`}
    className="mx-1 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600"
    onClick={props.onLinkClick}
  >
    <div className="flex items-center justify-center pl-3">
      <Icon
        icon="line-md:clipboard-list"
        width={25}
        className="text-[#818181] dark:text-gray-200"
      />
      <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040] dark:text-gray-200">
        {props.title}
      </span>
    </div>
  </Link>
);

export default MenuItem;
