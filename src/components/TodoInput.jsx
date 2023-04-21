import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

import { addTodo } from "../redux/todoSlice";

const TodoInput = (props) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (value === "") return
    dispatch(addTodo({title: value}))
    setValue("")
  }

  const handleInputChange = (event) => setValue(event.target.value)

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`border border-gray-200 mx-3 rounded shadow-md mb-2 overflow-y-hidden ${
        !focus ? "h-12" : "h-30"
      }`}
    >
      <div className="flex items-center py-1" onClick={() => setFocus(true)}>
        <div className="h-full w-12 flex justify-center items-center">
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
            className="form-input w-full placeholder:text-blue-500 border-none focus:placeholder:text-gray-300 focus:ring-transparent"
          />
        </div>
      </div>
      <div className={!focus ? "invisible" : "visible"}>
        <hr />
        <div className="bg-gray-100 h-10 flex items-center justify-end">
          <Icon icon="ion:calendar-outline" width="27" />
          <Icon icon="ion:notifications-outline" width="27" className="ml-2" />
          <Icon icon="ion:refresh-circle-outline" width="27" className="ml-2" />
          <button
            className="mx-3 bg-white text-blue-500 border py-[2px] px-2 hover:bg-blue-700 hover:text-white rounded-md "
            type="submit"
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoInput;
