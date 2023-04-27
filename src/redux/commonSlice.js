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
    edit: {
      id: undefined,
    },
  },
  reducers: {
    toggleStyles: (state, action) => {
      state.styles[action.payload.style] = action.payload.string;
    },
    toggleWindows: (state, action) => {
      if (action.payload.window === "menu") {
        state.windows = {
          menu: action.payload.toggle,
          settings: false,
          modal: false,
          editList: false,
          editTodo: false,
        };
      } else if (action.payload.window === "settings") {
        state.windows = {
          menu: false,
          settings: action.payload.toggle,
          modal: false,
          editList: false,
          editTodo: false,
        };
      } else {
        state.windows[action.payload.window] = action.payload.toggle;
      }
    },
    editTodo: (state, action) => {
      state.edit.id = action.payload.id;
    },
  },
});

export const { toggleStyles, toggleWindows, editTodo } = commonSlice.actions;
export default commonSlice.reducer;
