import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { searchTodo } from "../../../redux/commonSlice";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(searchTodo({ value: e.target.value }));
    navigate("/app/search");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Поиск..."
        className="form-input relative mx-auto mr-2 h-8 w-[100px] rounded-lg border-none placeholder:text-gray-300 focus:ring-transparent sm:w-[300px] md:w-[500px] lg:w-[750px]"
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchBar;
