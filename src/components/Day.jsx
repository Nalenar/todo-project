import { useState } from "react";
import TaskInput from "./TaskInput";
import TodoItem from "./TodoItem";

const Day = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    const newTodo = {
      text,
      id,
      key: id,
      complete: false,
    };

    setTodos(() => [newTodo, ...todos]);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((el) => el.id != id);
    setTodos(newTodos, ...todos);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((el) => {
      if (el.id === id) {
        el.complete = !el.complete;
      }
      return el;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="border border-red-500 overflow-hidden">
      <h2 className="text-3xl my-5 font-roboto text-center text-blue-700">
        Мой день
      </h2>
      <TaskInput addTodo={addTodo} />
      {todos.map((el) => (
        <TodoItem
          todo={el}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default Day;
