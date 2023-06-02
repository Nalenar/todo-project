import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import { toggleWindows } from "../../redux/commonSlice";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDeleteButtonClick = () => {
    dispatch(toggleWindows({ window: "modal", toggle: true }));
  };

  const handleEditButtonClick = () => {
    dispatch(toggleWindows({ window: "editList", toggle: true }));
  };

  return (
    <>
      <button
        className="mr-2 flex items-center justify-center rounded-full border bg-white p-1 shadow-md hover:bg-gray-200 focus:border-blue-500 dark:bg-gray-200 dark:hover:bg-gray-300"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon
          icon="solar:menu-dots-bold"
          width={30}
          className="text-[#1E40AF] dark:text-gray-600"
        />
      </button>

      <div
        className={`h-[82px] w-36 rounded-md border border-blue-400 bg-white shadow-md dark:border-gray-200 dark:bg-gray-600 ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <button
          className="flex w-full items-center justify-center rounded-t-md pb-1 pt-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={handleEditButtonClick}
        >
          <Icon
            icon="material-symbols:edit"
            width={27}
            className="dark:text-gray-200"
          />
          <span className="ml-1 font-roboto text-xl dark:text-gray-200">
            {t("Dropdown.change")}
          </span>
        </button>
        <hr />
        <button
          className="flex w-full items-center justify-center rounded-b-md pb-1.5 pt-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={handleDeleteButtonClick}
        >
          <Icon icon="ion:trash" width={27} color="#ef4444" />
          <span className="ml-1 font-roboto text-xl text-red-500">
            {t("Dropdown.delete")}
          </span>
        </button>
      </div>
    </>
  );
};

export default Dropdown;
