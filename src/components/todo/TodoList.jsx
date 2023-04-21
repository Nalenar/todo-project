import { useSelector } from "react-redux";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="overflow-y-auto">
      <h2 className="my-5 text-center font-roboto text-3xl text-blue-700">
        {props.headerText}
      </h2>
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
