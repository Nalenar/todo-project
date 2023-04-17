import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="w-[200px] fixed top-12 z-[1] h-full left-0 overflow-x-hidden bg-[#111] pt-14 duration-[0.5s]">
      <Link
        to="/app"
        className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        onClick={() => props.onLinkClick(false)}
      >
        Мой день
      </Link>
      <Link
        to={"/app/important"}
        className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline duration-[0.3s] hover:text-[#f1f1f1]"
        onClick={() => props.onLinkClick(false)}
      >
        Важное
      </Link>
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
  );
};

export default Menu;
