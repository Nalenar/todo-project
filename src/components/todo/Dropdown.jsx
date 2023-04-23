import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/listSlice";

const Dropdown = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteCategory({ id }));
  };

  return (
    <>
      <button
        className="mr-2 flex items-center justify-center rounded-full border bg-white p-1 shadow-md hover:bg-gray-200 focus:border-blue-500"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon icon="solar:menu-dots-bold" width={30} color="#1E40AF" />
      </button>

      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } h-[82px] w-36 rounded-md border border-blue-400 bg-white shadow-md`}
      >
        <button className="flex w-full items-center justify-center rounded-t-md pb-1 pt-2 text-gray-600 hover:bg-gray-100">
          <Icon icon="material-symbols:edit" width={27} />
          <span className="ml-1 font-roboto text-xl">Edit</span>
        </button>
        <hr />
        <button
          className="w-full rounded-b-md pb-1.5 pt-1 hover:bg-gray-100"
          onClick={handleDeleteClick}
        >
          <Link to="/app/" className="flex items-center justify-center">
            <Icon icon="ion:trash" width={27} color="#ef4444" />
            <span className="ml-1 font-roboto text-xl text-red-500">
              Delete
            </span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Dropdown;
