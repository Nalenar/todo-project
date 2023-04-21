import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../redux/todoSlice";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({ id: props.todo.id, completed: !props.todo.completed })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: props.todo.id }));
  };

  return (
    <div className="mx-3 mt-3 flex h-12 items-center rounded border border-gray-200 shadow-md last-of-type:mb-2">
      <div className="mx-3 cursor-pointer" onClick={handleCompleteClick}>
        {props.todo.completed ? (
          <Icon icon="ion:checkmark-circle" width="27" color="#3b82f6" />
        ) : (
          <Icon icon="mdi:circle-outline" width="27" color="#3b82f6" />
        )}
      </div>
      <p
        className={`text flex h-full w-full items-center overflow-x-auto ${
          props.todo.completed ? "italic text-gray-400 line-through" : ""
        }`}
      >
        {props.todo.title}
      </p>
      <div
        onClick={handleDeleteClick}
        className="mx-3 flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
      >
        <Icon icon="ion:trash" width={27} color="#ef4444" />
      </div>
    </div>
  );
};

export default TodoItem;
