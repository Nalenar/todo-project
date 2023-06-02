import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { toggleComplete, toggleList } from "../../redux/todoSlice";
import { toggleWindows, editTodo } from "../../redux/commonSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };

  const handleTodoClick = () => {
    dispatch(toggleWindows({ window: "editTodo", toggle: true }));
    dispatch(editTodo({ id: todo.id }));
  };

  const handleImportantClick = () => {
    dispatch(
      toggleList({
        id: todo.id,
        list: "important",
        toggle: !todo.list.includes("important"),
      })
    );
  };

  return (
    <div className="mx-3 mt-3 flex h-12 cursor-pointer items-center rounded border border-gray-200 bg-white shadow-md last-of-type:mb-2 dark:bg-gray-600">
      <div
        className="mx-3 cursor-pointer"
        onClick={handleCompleteClick}
        role="button-complete"
      >
        {todo.completed ? (
          <Icon
            icon="line-md:circle-to-confirm-circle-transition"
            width="27"
            className="text-[#3b82f6] dark:text-gray-200"
          />
        ) : (
          <Icon
            icon="line-md:circle"
            width="27"
            className="text-[#3b82f6] dark:text-gray-200"
          />
        )}
      </div>
      <p
        onClick={handleTodoClick}
        role="todo-item"
        className={`flex h-full w-full items-center overflow-x-auto dark:text-gray-200 ${
          todo.completed
            ? "italic text-gray-400 line-through dark:text-gray-400"
            : ""
        }`}
      >
        {todo.title}
      </p>
      <button
        onClick={handleImportantClick}
        className="mx-3 flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
        role="button-important"
      >
        {todo.list.includes("important") ? (
          <Icon
            icon="line-md:star-alt-filled"
            width={27}
            className="text-[#3b82f6] dark:text-gray-200"
          />
        ) : (
          <Icon
            icon="line-md:star-alt"
            width={27}
            className="text-[#3b82f6] dark:text-gray-200"
          />
        )}
      </button>
    </div>
  );
};

export default TodoItem;
