import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    styles: {
      blur: "",
    },
    windows: {
      menu: false,
      settings: false,
      modal: false,
      editList: false,
      editTodo: false,
    },
    edit: {},
  },
  reducers: {
    toggleStyles: (state, action) => {
      state.styles[action.payload.style] = action.payload.string;
    },
    toggleWindows: (state, action) => {
      state.windows[action.payload.window] = action.payload.toggle;
    },
    editTodo: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { toggleStyles, toggleWindows, editTodo } = commonSlice.actions;
export default commonSlice.reducer;
