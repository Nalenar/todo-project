import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

import { addTodo } from "../../redux/todoSlice";

const TodoAddForm = ({ category }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (value === "") return;
    dispatch(addTodo({ title: value, category }));
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`mx-3 mb-2 overflow-y-hidden rounded border border-gray-200 bg-white shadow-md ${
        !focus ? "h-12" : "h-30"
      }`}
    >
      <div className="flex items-center py-1" onClick={() => setFocus(true)}>
        <div className="flex h-full w-12 items-center justify-center">
          {!focus ? (
            <Icon
              icon="ion:add-circle-outline"
              width={30}
              color="#3b82f6"
              className="cursor-pointer"
            />
          ) : (
            <Icon icon="mdi:circle-outline" width="27" color="#3b82f6" />
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="todo"
            value={value}
            placeholder="Добавьте задачу"
            onChange={handleInputChange}
            className="form-input w-full border-none font-roboto placeholder:text-blue-500 focus:ring-transparent focus:placeholder:text-gray-300"
          />
        </div>
      </div>
      <div className={!focus ? "invisible" : "visible"}>
        <hr />
        <div className="flex h-10 items-center justify-end bg-gray-100">
          <Icon icon="ion:calendar-outline" width="27" />
          <Icon icon="ion:notifications-outline" width="27" className="ml-2" />
          <Icon icon="ion:refresh-circle-outline" width="27" className="ml-2" />
          <button
            className="mx-3 rounded-md border bg-white px-2 py-[2px] font-roboto text-blue-500 hover:bg-blue-700 hover:text-white "
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
