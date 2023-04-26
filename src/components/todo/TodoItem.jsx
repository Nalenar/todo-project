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
    <div className="mx-3 mt-3 flex h-12 cursor-pointer items-center rounded border border-gray-200 bg-white shadow-md last-of-type:mb-2">
      <div className="mx-3 cursor-pointer" onClick={handleCompleteClick}>
        {todo.completed ? (
          <Icon
            icon="line-md:circle-to-confirm-circle-transition"
            width="27"
            color="#3b82f6"
          />
        ) : (
          <Icon icon="line-md:circle" width="27" color="#3b82f6" />
        )}
      </div>
      <p
        onClick={handleTodoClick}
        className={`flex h-full w-full items-center overflow-x-auto ${
          todo.completed ? "italic text-gray-400 line-through" : ""
        }`}
      >
        {todo.title}
      </p>
      <button
        onClick={handleImportantClick}
        className="mx-3 flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
      >
        {todo.list.includes("important") ? (
          <Icon icon="line-md:star-alt-filled" width={27} color="#3b82f6" />
        ) : (
          <Icon icon="line-md:star-alt" width={27} color="#3b82f6" />
        )}
      </button>
    </div>
  );
};

export default TodoItem;
