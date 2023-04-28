/**
 * Redux слайс который содержит в себе всю логику связанную cо списками задач
 * @module listSlice
 * @function createSlice - создает слайс
 *
 * @param {string} name - Название
 * @param {array} initialState - Начальное состояние
 * @param {object} reducers - Редюсеры
 *
 * @param {object} state - состояние на данный момент
 * @param {object} action - данные действия
 *
 * @function addCategory - создает список
 * @function deleteCategory - удаляет список
 * @function renameCategory - изменяет название списка на новое, указанное пользователем
 */

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
    renameCategory: (state, action) => {
      const index = state.findIndex((list) => list.id === action.payload.id);
      state[index].title = action.payload.title;
    },
  },
});

/** @exports listSlice.actions  - возможные действия со списками */
export const { addCategory, deleteCategory, renameCategory } =
  listSlice.actions;

/**
 * @default
 * @exports listSlice.reducer - экспортирует по-умолчанию редюсер всего слайса
 */
export default listSlice.reducer;
