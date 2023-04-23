import { Link } from "react-router-dom";

const MenuItem = (props) => (
  <div className="mx-1 flex items-center justify-between hover:bg-gray-100">
    <Link
      to={`/app/${props.id}`}
      className="mx-1 pl-3"
      onClick={props.onLinkClick}
    >
      <span className="ml-1 block py-2 pr-2 text-lg text-[#818181] no-underline duration-[0.3s] hover:text-[#404040]">
        {props.title}
      </span>
    </Link>
  </div>
);

export default MenuItem;
