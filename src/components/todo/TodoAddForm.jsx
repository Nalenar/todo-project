import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

import { addTodo } from "../../redux/todoSlice";

const TodoAddForm = ({ id }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (value === "") return;
    dispatch(addTodo({ title: value, list: id }));
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`mx-3 mb-2 overflow-y-hidden rounded border border-gray-200 bg-white shadow-md dark:bg-gray-600 ${
        !focus ? "h-12" : "h-30"
      }`}
    >
      <div className="flex items-center py-1" onClick={() => setFocus(true)}>
        <div className="flex h-full w-12 items-center justify-center">
          {!focus ? (
            <Icon
              icon="ion:add-circle-outline"
              width={30}
              className="cursor-pointer text-[#3b82f6] dark:text-gray-200"
            />
          ) : (
            <Icon
              icon="mdi:circle-outline"
              width="27"
              className="text-[#3b82f6] dark:text-gray-200"
            />
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="todo"
            value={value}
            placeholder="Добавьте задачу"
            onChange={handleInputChange}
            className="form-input w-full border-none font-roboto placeholder:text-blue-500 focus:ring-transparent focus:placeholder:text-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:placeholder:text-gray-200"
          />
        </div>
      </div>
      <div className={!focus ? "invisible" : "visible"}>
        <hr />
        <div className="flex h-10 items-center justify-end bg-gray-100 dark:bg-gray-400">
          <Icon icon="ion:calendar-outline" width="27" />
          <Icon icon="ion:notifications-outline" width="27" className="ml-2" />
          <Icon icon="ion:refresh-circle-outline" width="27" className="ml-2" />
          <button
            className="mx-3 rounded-md border bg-white px-2 py-[2px] font-roboto text-blue-500 hover:bg-blue-700 hover:text-white dark:border-none dark:bg-gray-300 dark:text-gray-600 "
            type="submit"
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoAddForm;
