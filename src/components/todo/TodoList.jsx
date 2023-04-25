import { useSelector } from "react-redux";

import TodoAddForm from "./TodoAddForm";
import TodoItem from "./TodoItem";
import EditListForm from "./EditListForm";
import Dropdown from "../common/Dropdown";
import Modal from "../common/Modal";
import EditTodo from "./EditTodo";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const blur = useSelector((state) => state.style.styles.blur);
  const editList = useSelector((state) => state.style.windows.editList);

  return (
    <div className={`overflow-y-auto ${blur}`}>
      <div className="flex h-[100px] items-center justify-center">
        {editList ? (
          <EditListForm id={props.category} title={props.headerText} />
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
