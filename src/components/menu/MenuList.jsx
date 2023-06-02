import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { addCategory } from "../../redux/listSlice";

import MenuItem from "./MenuItem";

const MenuList = (props) => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [value, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (value === "") return;
    dispatch(addCategory({ title: value }));
    setValue("");
  };

  return (
    <>
      {lists.map((list) => (
        <MenuItem
          key={list.id}
          id={list.id}
          title={list.title}
          onLinkClick={props.onLinkClick}
        />
      ))}

      <form onSubmit={handleFormSubmit}>
        <div className="flex w-full justify-center">
          <button type="submit" className="ml-2 mr-1 pl-1">
            <Icon
              icon="line-md:plus-circle"
              width={25}
              className="cursor-pointer text-[#3b82f6] dark:text-gray-200"
            />
          </button>
          <input
            type="text"
            placeholder={t("Menu.new")}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="form-input mr-1 h-10 w-full border-none pl-0 text-lg placeholder:text-blue-500 focus:ring-transparent focus:placeholder:text-gray-500 dark:bg-gray-500 dark:text-gray-200 dark:placeholder:text-gray-200 dark:focus:placeholder:text-gray-400"
          />
        </div>
      </form>
    </>
  );
};

export default MenuList;
