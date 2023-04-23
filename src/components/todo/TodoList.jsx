import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const blur = useSelector((state) => state.style.blur);

  return (
    <div id="main" className={`overflow-y-auto ${blur}`}>
      <div className="flex items-center justify-center">
        <h2 className="my-5 mr-4 text-center font-roboto text-3xl font-bold text-blue-800">
          {props.headerText}
        </h2>
        <button className="mr-2 flex items-center justify-center rounded-full border bg-white p-1 shadow-md hover:bg-gray-100">
          <Icon
            icon="solar:menu-dots-bold"
            className=""
            width={30}
            color="#1E40AF"
          />
        </button>
      </div>

      <TodoInput category={props.category} />

      {todos
        .filter((todo) => todo.category === props.category)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
