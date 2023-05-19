import { useState } from "react";
import { useDispatch } from "react-redux";

import { renameCategory } from "../../../redux/listSlice";
import { toggleWindows } from "../../../redux/commonSlice";

const EditListForm = ({ id, title }) => {
  const [currentValue, setCurrentValue] = useState("");
  const dispatch = useDispatch();

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    dispatch(renameCategory({ id, title: currentValue }));
    setCurrentValue("");
    dispatch(toggleWindows({ window: "editList", toggle: false }));
  };

  return (
    <form
      onSubmit={handleEditFormSubmit}
      className="flex items-center justify-center"
    >
      <input
        autoFocus={true}
        type="text"
        placeholder={title}
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
        className="form-input mr-3 h-10 w-52 border-none bg-transparent p-1 text-center font-roboto text-2xl placeholder:text-blue-500 focus:ring-transparent focus:placeholder:text-gray-500"
      />
      <button
        type="submit"
        className="h-10 rounded-md bg-blue-500 px-2 py-1 font-roboto text-xl text-white shadow-md hover:bg-blue-600"
        role="button-edit_list"
      >
        Изменить
      </button>
    </form>
  );
};

export default EditListForm;
