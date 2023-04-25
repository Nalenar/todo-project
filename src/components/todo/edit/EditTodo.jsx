import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";

import { toggleWindows, toggleStyles } from "../../../redux/commonSlice";
import { deleteTodo } from "../../../redux/todoSlice";

import EditTodoFooter from "./components/EditTodoFooter";

const EditTodo = () => {
  const editTodo = useSelector((state) => state.style.windows.editTodo);
  const todo = useSelector((state) => state.style.edit);
  const dispatch = useDispatch();

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "editTodo", toggle: false }));
  };

  return (
    <>
      <div
        className={`fixed z-[2] h-full w-full bg-[#efefef] p-3 font-roboto shadow-2xl transition-all duration-300 lg:w-[300px] ${
          editTodo ? "right-0" : "-right-full"
        }`}
      >
        <div className="h-[85%] w-full overflow-y-auto bg-white">
          {todo.title}
        </div>

        <EditTodoFooter todo={todo} />
      </div>

      {/* handle click away */}
      <div
        className={`fixed z-[1] h-full w-full bg-transparent transition-all duration-0 ${
          editTodo ? "right-0" : "-right-full"
        }`}
        onClick={handleClickAway}
      ></div>
    </>
  );
};

export default EditTodo;
