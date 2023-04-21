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
    <div className="mx-3 mt-3 h-12 flex items-center shadow-md border border-gray-200 rounded last-of-type:mb-2">
      <div className="mx-3 cursor-pointer" onClick={handleCompleteClick}>
        {props.todo.completed ? (
          <Icon icon="ion:checkmark-circle" width="27" color="#3b82f6" />
        ) : (
          <Icon icon="mdi:circle-outline" width="27" color="#3b82f6" />
        )}
      </div>
      <p
        className={`h-full w-full flex items-center overflow-x-auto text ${
          props.todo.completed ? "line-through text-gray-400 italic" : ""
        }`}
      >
        {props.todo.title}
      </p>
      <div
        onClick={handleDeleteClick}
        className="h-[30px] w-[30px] flex justify-center items-center cursor-pointer mx-3"
      >
        <Icon icon="ion:trash" width={27} color="#ef4444" />
      </div>
    </div>
  );
};

export default TodoItem;
