import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "blur",
  initialState: {
    blur: "",
  },
  reducers: {
    AddBlur: (state) => {
      state.blur = "blur-sm";
    },
    deleteBlur: (state) => {
      state.blur = "";
    },
  },
});

export const { AddBlur, deleteBlur } = styleSlice.actions;
export default styleSlice.reducer;
