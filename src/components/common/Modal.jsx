import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleWindows } from "../../redux/styleSlice";
import { deleteCategory } from "../../redux/listSlice";

const Modal = ({ id }) => {
  const modal = useSelector((state) => state.style.windows["modal"]);
  const dispatch = useDispatch();

  const handleYesButtonClick = () => {
    dispatch(toggleWindows({ window: "modal", toggle: false }));
    dispatch(deleteCategory({ id }));
  };

  const handleNoButtonClick = () => {
    dispatch(toggleWindows({ window: "modal", toggle: false }));
  };

  return (
    <>
      {modal ? (
        <div className="absolute left-1/2 top-1/2 -my-36 -ml-40 flex h-36 w-80 flex-col justify-center rounded-md border-2 border-blue-500 bg-white shadow-lg">
          <h1 className="mb-3 text-center font-roboto text-lg font-medium">
            Вы действительно хотите удалить этот список?
          </h1>
          <div className="flex flex-row items-center justify-around font-bold">
            <Link
              to="/app/"
              className="mr-2 rounded-lg border border-gray-300 bg-gray-300 px-6 py-2 font-roboto text-red-500 hover:border-blue-500 focus:underline focus:underline-offset-8"
              onClick={handleYesButtonClick}
            >
              Да
            </Link>
            <button
              className="rounded-lg border border-gray-300 bg-gray-300 px-6 py-2 font-roboto font-bold hover:border hover:border-blue-400 focus:underline focus:underline-offset-8"
              onClick={handleNoButtonClick}
            >
              Нет
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
