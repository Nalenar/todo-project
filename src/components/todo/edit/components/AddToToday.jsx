import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { toggleList } from "../../../../redux/todoSlice";

const AddToToday = ({ todo }) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
      toggleList({
        id: todo.id,
        list: "today",
        toggle: !todo.list.includes("today"),
      })
    );
  };

  return (
    <div className="mt-5 flex h-16 w-full items-center justify-center rounded border border-gray-200 bg-white px-4 shadow-md hover:bg-gray-100">
      <Icon icon="line-md:sunny-outline" width={35} color="#818181" />
      {!todo.list.includes("today") ? (
        <p
          className="mx-4 cursor-pointer text-center font-medium text-[#818181]"
          onClick={handleAddClick}
        >
          Добавить в список "Мой день"
        </p>
      ) : (
        <>
          <p className="mx-4 cursor-default text-center font-medium text-blue-500">
            Убрать из списка "Мой день"
          </p>
          <button
            className="text-xl font-bold text-[#818181]"
            onClick={handleAddClick}
          >
            X
          </button>
        </>
      )}
    </div>
  );
};

export default AddToToday;
