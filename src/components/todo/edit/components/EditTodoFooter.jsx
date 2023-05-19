import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { toggleWindows } from "../../../../redux/commonSlice";
import { deleteTodo } from "../../../../redux/todoSlice";

const EditTodoFooter = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEditClose = () => {
    dispatch(toggleWindows({ window: "editTodo", toggle: false }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: todo.id }));
    handleEditClose();
  };

  return (
    <div className="flex h-[10%] items-center justify-between border-t text-gray-500">
      <button onClick={handleEditClose} role="button-close_edit">
        <Icon icon="line-md:menu-fold-right" className="text-3xl" />
      </button>
      <p className="text-lg">Создано сегодня</p>
      <button onClick={handleDeleteClick} role="button-delete_todo">
        <Icon icon="ion:trash" className="text-3xl" />
      </button>
    </div>
  );
};

export default EditTodoFooter;
