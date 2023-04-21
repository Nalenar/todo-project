import { useSelector } from "react-redux";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Day = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div className="overflow-y-auto">
      <h2 className="text-3xl my-5 font-roboto text-center text-blue-700">
        Мой день
      </h2>
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default Day;
