import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import commonReducer from "./commonSlice";
import listReducer from "./listSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    lists: listReducer,
    style: commonReducer,
  },
});
