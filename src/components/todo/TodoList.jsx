import { useSelector } from "react-redux";

import TodoAddForm from "./TodoAddForm";
import TodoItem from "./TodoItem";
import Dropdown from "../common/Dropdown";
import Modal from "../common/Modal";
import EditListForm from "./edit/EditListForm";

const TodoList = ({ listId, listTitle, listEdit }) => {
  const todos = useSelector((state) => state.todos);
  const blur = useSelector((state) => state.common.styles.blur);
  const editList = useSelector((state) => state.common.windows.editList);

  return (
    <div className={`overflow-y-auto ${blur}`}>
      <div className="flex h-[100px] items-center justify-center">
        {editList ? (
          <EditListForm id={listId} title={listTitle} />
        ) : (
          <>
            <h2 className="mr-4 text-center font-roboto text-3xl font-bold text-blue-800 dark:text-gray-200">
              {listTitle}
            </h2>
            {listEdit ? <Dropdown /> : <></>}
          </>
        )}
      </div>

      <TodoAddForm id={listId} />

      <Modal id={listId} />

      {listId === "tasks"
        ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : todos
            .filter((todo) => todo.list.includes(listId))
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
