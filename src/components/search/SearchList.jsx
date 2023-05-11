import { useSelector } from "react-redux";

import TodoItem from "../todo/TodoItem";

const SearchList = () => {
  const todos = useSelector((state) => state.todos);
  const search = useSelector((state) => state.common.search);

  return (
    <div>
      {todos
        .filter((todo) => todo.title.includes(search))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default SearchList;
