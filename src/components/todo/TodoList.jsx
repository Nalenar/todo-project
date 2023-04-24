import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoAddForm from "./TodoAddForm";
import TodoItem from "./TodoItem";
import Dropdown from "../common/Dropdown";
import Modal from "../common/Modal";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const blur = useSelector((state) => state.style.styles.blur);
  const editList = useSelector((state) => state.style.windows.editList);
  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState("");

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`overflow-y-auto ${blur}`}>
      <div className="flex h-[100px] items-center justify-center">
        {editList ? (
          <form onSubmit={handleEditFormSubmit}>
            <input
              autoFocus={true}
              type="text"
              placeholder={props.headerText}
              value={currentValue}
              onChange={(event) => setCurrentValue(event.target.value)}
              className="form-input h-10 w-52 p-1 text-2xl border-none focus:ring-transparent text-center"
            />
            <button type="submit">Change</button>
          </form>
        ) : (
          <>
            <h2 className="mr-4 text-center font-roboto text-3xl font-bold text-blue-800">
              {props.headerText}
            </h2>
            {props.list_edit ? <Dropdown /> : <></>}
          </>
        )}
      </div>

      <TodoAddForm category={props.category} />

      <Modal id={props.category} />

      {todos
        .filter((todo) => todo.category === props.category)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
