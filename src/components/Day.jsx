import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Day = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (todo === "") return;

    const newTodo = {
      id: todos.length + 1,
      text: todo.trim(),
      complete: false,
    };

    setTodos([newTodo, ...todos]);
    setTodo("");
  };

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((el) => el.id !== id);
    setTodos(removeItem);
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
    <div className="overflow-y-auto">
      <h2 className="text-3xl my-5 font-roboto text-center text-blue-700">
        Мой день
      </h2>
      <TodoInput
        todo={todo}
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
      />
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          todo={el}
          onDeleteClick={handleDeleteClick}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default Day;
