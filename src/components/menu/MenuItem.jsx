import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/listSlice";

const MenuItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteCategory({ id: props.id }));
  };

  return (
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
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center"
        onClick={handleDeleteClick}
      >
        <Icon icon="ion:trash" width={23} color="#ef4444" />
      </div>
    </div>
  );
};

export default MenuItem;
