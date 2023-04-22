import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import styleReducer from "./styleSlice";
import listReducer from "./listSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    lists: listReducer,
    style: styleReducer,
  },
});
