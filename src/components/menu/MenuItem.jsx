import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const MenuItem = (props) => (
  // <div className="mx-1 flex items-center justify-between hover:bg-gray-100">
  //   <Link
  //     to={`/app/${props.id}`}
  //     className="flex items-center justify-center pl-3"
  //     onClick={props.onLinkClick}
  //   >
  //     <Icon icon="line-md:clipboard-list" width={25} color="#818181" />
  //     <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#efbfbf]">
  //       {props.title}
  //     </span>
  //   </Link>
  // </div>
  <Link
    to={`/app/${props.id}`}
    className="mx-1 flex items-center justify-between hover:bg-gray-100"
    onClick={props.onLinkClick}
  >
    <div className="flex items-center justify-center pl-3">
      <Icon icon="line-md:clipboard-list" width={25} color="#818181" />
      <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040]">
        {props.title}
      </span>
    </div>
  </Link>
);

const bomba = () => {
  <Link
    to={`/app/${props.id}`}
    className="mx-1 flex items-center justify-between hover:bg-gray-100"
    onClick={props.onLinkClick}
  >
    <div className="flex items-center justify-center pl-3">
      <Icon icon="line-md:clipboard-list" width={25} color="#818181" />
      <span className="ml-2 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#efbfbf]">
        {props.title}
      </span>
    </div>
  </Link>;
};

export default MenuItem;
