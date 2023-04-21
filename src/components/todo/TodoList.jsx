import { useSelector } from "react-redux";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const blurStyle = useSelector((state) => state.style.blur);

  return (
    <div className={`overflow-y-auto ${blurStyle}`}>
      <h2 className="my-5 text-center font-roboto text-3xl font-bold text-blue-500">
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
