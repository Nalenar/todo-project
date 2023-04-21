import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import styleReducer from "./styleSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    style: styleReducer,
  },
});
