import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "lists",
  initialState: [
    {
      id: "HELP ME",
      title: "HELP ME",
    },
  ],
  reducers: {
    addCategory: (state, action) => {
      const list = {
        id: action.payload.title,
        title: action.payload.title,
      };
      state.push(list);
    },
    deleteCategory: (state, action) => {
      return state.filter((list) => list.id !== action.payload.id);
    },
  },
});

export const { addCategory, deleteCategory } = listSlice.actions;
export default listSlice.reducer;
