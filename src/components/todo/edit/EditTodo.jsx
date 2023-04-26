import { useSelector, useDispatch } from "react-redux";

import { toggleWindows } from "../../../redux/commonSlice";

import EditTodoFooter from "./components/EditTodoFooter";
import EditTodoItem from "./components/EditTodoItem";
import AddToToday from "./components/AddToToday";
import RepeatTodo from "./components/RepeatTodo";

const EditTodo = () => {
  const todos = useSelector((state) => state.todos);
  const editTodo = useSelector((state) => state.style.windows.editTodo);
  const edit = useSelector((state) => state.style.edit);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`fixed z-[2] h-full w-full bg-[#efefef] p-3 font-roboto shadow-2xl transition-all duration-300 lg:w-[300px] ${
          editTodo ? "right-0" : "-right-full"
        }`}
      >
        <div className="h-[85%] w-full overflow-y-auto">
          {todos
            .filter((todo) => todo.id === edit.id)
            .map((todo) => (
              <>
                <EditTodoItem key={todo.id + "_EditTodoItem"} todo={todo} />
                <AddToToday key={todo.id + "_AddToToday"} todo={todo} />
                <RepeatTodo key={todo.id + "_RepeatTodo"} todo={todo} />
              </>
            ))}
        </div>

        <EditTodoFooter todo={edit} />
      </div>

      {/* handle click away */}
      <div
        className={`fixed z-[1] h-full w-full bg-transparent transition-all duration-0 ${
          editTodo ? "right-0" : "-right-full"
        }`}
        onClick={() =>
          dispatch(toggleWindows({ window: "editTodo", toggle: false }))
        }
      ></div>
    </>
  );
};

export default EditTodo;
