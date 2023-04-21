import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="fixed left-0 top-12 z-[1] h-full w-[200px] overflow-x-hidden bg-[#111] pt-5">
      <Link
        to="/app"
        className="block py-2 pl-8 pr-2 text-[25px] text-[#818181] no-underline hover:text-[#f1f1f1]"
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
    </div>
  );
};

export default Menu;
