import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";

import { toggleWindows, toggleStyles } from "../../redux/styleSlice";

const EditTodo = () => {
  const editTodo = useSelector((state) => state.style.windows.editTodo);
  const dispatch = useDispatch();

  const handleEditClose = () => {
    dispatch(toggleWindows({ window: "editTodo", toggle: false }));
  };

  return (
    <>
      <div
        className={`fixed z-[2] h-full w-full bg-[#efefef] p-3 font-roboto shadow-2xl transition-all duration-300 lg:w-[300px] ${
          editTodo ? "right-0" : "-right-full"
        }`}
      >
        <div className="h-[85%] w-full overflow-y-auto bg-white">hello</div>
        <div className="flex h-[10%] items-center justify-between border-t text-gray-500">
          <button onClick={handleEditClose}>
            <Icon icon="line-md:menu-fold-right" className="text-3xl" />
          </button>
          <p className="text-lg">Создано сегодня</p>
          <button>
            <Icon icon="ion:trash" className="text-3xl" />
          </button>
        </div>
      </div>

      {/* handle click away */}
      <div
        className={`fixed z-[1] h-full w-full bg-transparent transition-all duration-0 ${
          editTodo ? "right-0" : "-right-full"
        }`}
        onClick={handleEditClose}
      ></div>
    </>
  );
};

export default EditTodo;
