import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";

import { addCategory } from "../../redux/listSlice";

import MenuItem from "./MenuItem";

const MenuList = (props) => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

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
              color="#3b82f6"
              className="cursor-pointer"
            />
          </button>
          <input
            type="text"
            placeholder="Новая категория"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="form-input mr-1 h-10 w-full border-none pl-0 text-lg placeholder:text-blue-500 focus:ring-transparent focus:placeholder:text-gray-500"
          />
        </div>
      </form>
    </>
  );
};

export default MenuList;
