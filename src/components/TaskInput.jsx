import { useState } from "react";
import { Icon } from "@iconify/react";

const TaskInput = ({ addTodo }) => {
  const [focus, setFocus] = useState(false);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText == "") return;
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-gray-200 mx-3 rounded shadow-md mb-2 ${
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
        <div>
          <input
            onChange={(event) => setTodoText(event.target.value)}
            type="text"
            value={todoText}
            placeholder="Добавьте задачу"
            className="form-input placeholder:text-blue-500 border-none focus:placeholder:text-gray-300 focus:ring-transparent"
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

export default TaskInput;
