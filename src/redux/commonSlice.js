/**
 * Redux слайс который содержит в себе всю логику связанную cо стандартными функциями
 * @module commonSlice
 * @function createSlice - создает слайс
 *
 * @param {string} name - Название
 * @param {array} initialState - Начальное состояние
 * @param {object} reducers - Редюсеры
 *
 * @param {object} state - состояние на данный момент
 * @param {object} action - данные действия
 *
 * @function toggleStyles - изменяет значение выбранного стиля
 * @function toggleWindows - изменяет значение выбранного окна
 * @function editTodo - передает id задачи в состояние
 */

import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    styles: {
      blur: "",
      theme: "light",
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
    search: undefined,
  },
  reducers: {
    toggleStyles: (state, action) => {
      state.styles[action.payload.style] = action.payload.string;
    },
    toggleWindows: (state, action) => {
      // if (action.payload.window === "menu") {
      //   state.windows = {
      //     menu: action.payload.toggle,
      //     settings: false,
      //     modal: false,
      //     editList: false,
      //     editTodo: false,
      //   };
      // } else if (action.payload.window === "settings") {
      //   state.windows = {
      //     menu: false,
      //     settings: action.payload.toggle,
      //     modal: false,
      //     editList: false,
      //     editTodo: false,
      //   };
      // } else {
      //   state.windows[action.payload.window] = action.payload.toggle;
      // }
      state.windows[action.payload.window] = action.payload.toggle;
    },
    editTodo: (state, action) => {
      state.edit.id = action.payload.id;
    },
    searchTodo: (state, action) => {
      state.search = action.payload.value;
    },
  },
});

/** @exports commonSlice.actions  - возможные действия со стандартными функциями */
export const { toggleStyles, toggleWindows, editTodo, searchTodo } =
  commonSlice.actions;

/**
 * @default
 * @exports commonSlice.reducer - экспортирует по-умолчанию редюсер всего слайса
 */
export default commonSlice.reducer;
