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
      {!todo.list.includes("today") ? (
        <>
          <Icon
            icon="line-md:sunny-outline"
            className="text-2xl text-[#818181] lg:text-4xl"
          />
          <p
            className="mx-4 cursor-pointer text-center font-medium text-[#818181]"
            onClick={handleAddClick}
          >
            Добавить в список "Мой день"
          </p>
        </>
      ) : (
        <>
          <Icon
            icon="line-md:sunny-outline"
            className="text-2xl text-blue-500 lg:text-4xl"
          />
          <p className="mx-4 cursor-default text-center font-medium text-blue-500">
            Убрать из списка "Мой день"
          </p>
          <button
            className="text-xl font-semibold text-blue-500"
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
