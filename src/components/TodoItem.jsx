import { Icon } from "@iconify/react";

const TodoItem = (props) => (
  <div className="mx-3 mt-3 h-12 flex items-center shadow-md border border-gray-200 rounded last-of-type:mb-2">
    <div className="mx-3" onClick={() => props.handleComplete(props.todo.id)}>
      {props.todo.complete ? (
        <Icon icon="ion:checkmark-circle" width="27" color="#3b82f6" />
      ) : (
        <Icon icon="mdi:circle-outline" width="27" color="#3b82f6" />
      )}
    </div>
    <p
      className={`h-full w-full flex items-center overflow-x-auto text ${
        props.todo.complete ? "line-through text-gray-400 italic" : ""
      }`}
    >
      {props.todo.text}
    </p>
    <div
      className="h-[30px] w-[30px] flex justify-center items-center cursor-pointer mx-3"
      onClick={() => props.handleDelete(props.todo.id)}
    >
      <Icon icon="ion:trash" width={27} color="#ef4444" />
    </div>
  </div>
);

export default TodoItem;
