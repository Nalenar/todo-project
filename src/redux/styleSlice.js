import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "style",
  initialState: {
    styles: {
      blur: "",
    },
    windows: {
      menu: false,
      settings: false,
      modal: false,
    },
  },
  reducers: {
    toggleStyles: (state, action) => {
      state.styles[action.payload.style] = action.payload.string;
    },
    toggleWindows: (state, action) => {
      if (action.payload.window === "menu" && action.payload.toggle) {
        state.windows["menu"] = true;
        state.windows["settings"] = false;
      } else if (
        action.payload.window === "settings" &&
        action.payload.toggle
      ) {
        state.windows["settings"] = true;
        state.windows["menu"] = false;
      } else {
        state.windows[action.payload.window] = action.payload.toggle;
      }
    },
  },
});

export const { toggleStyles, toggleWindows } = styleSlice.actions;
export default styleSlice.reducer;
