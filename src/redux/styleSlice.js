import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "blur",
  initialState: {
    blur: "",
  },
  reducers: {
    addBlur: (state) => {
      state.blur = "blur-sm";
    },
    deleteBlur: (state) => {
      state.blur = "";
    },
  },
});

export const { addBlur, deleteBlur } = styleSlice.actions;
export default styleSlice.reducer;
