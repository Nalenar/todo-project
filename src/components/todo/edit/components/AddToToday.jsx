import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { toggleList } from "../../../../redux/todoSlice";

const AddToToday = ({ todo }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    <div
      className="mt-5 flex h-16 w-full cursor-pointer items-center justify-center rounded border border-gray-200 bg-white px-4 shadow-md hover:bg-gray-100 dark:bg-gray-600"
      onClick={handleAddClick}
      role="button-add_to_today"
    >
      {!todo.list.includes("today") ? (
        <div className="flex items-center justify-center">
          <Icon
            icon="line-md:sunny-outline"
            className="text-2xl text-[#818181] dark:text-gray-200 lg:text-4xl"
          />
          <p className="mx-4 text-center font-medium text-[#818181] dark:text-gray-200">
            {t("editTodo.addToToday.add")}
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Icon
            icon="line-md:sunny-outline"
            className="text-2xl text-blue-500 dark:text-gray-200 lg:text-4xl"
          />
          <p className="mx-4 text-center font-medium text-blue-500 dark:text-gray-200">
            {t("editTodo.addToToday.delete")}
          </p>
          <button className="text-xl font-semibold text-blue-500 dark:text-gray-200">
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToToday;
