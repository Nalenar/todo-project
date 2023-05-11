import { useSelector } from "react-redux";

import TodoItem from "../todo/TodoItem";

const SearchList = () => {
  const todos = useSelector((state) => state.todos);
  const search = useSelector((state) => state.common.search);
  const filteredTodos = todos.filter((todo) => todo.title.includes(search));

  return (
    // <div>
    //   {filteredTodos.map((todo) => (
    //     <TodoItem key={todo.id} todo={todo} />
    //   ))}
    // </div>
    <>
      {filteredTodos.length > 0 ? (
        <div>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <div className="flex h-40 w-full items-center justify-center font-roboto text-2xl font-semibold italic text-gray-500">
          Нет результата...
        </div>
      )}
    </>
  );
};

export default SearchList;
