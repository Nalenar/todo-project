/**
 * Главный файл который использует store
 * из библиотеки @reduxjs/toolkit
 * @module
 * 
 * Экспортирует объект хранящий в себе редюсеры слайсов
 * @exports 
 * 
 * @param {object} reducer - Содержит в себе название состояния и относящийся к нему редюсер
 * 
 * @param {object} todos - Содержит в себе все экшены, редюсеры и состояния для задач
 * @param {object} lists - Содержит в себе все экшены, редюсеры и состояния для списков 
 * @param {object} common - Содержит в себе все экшены, редюсеры и состояния для стандартных функций (например стилей, окон и т.д.)
 */

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import commonReducer from "./commonSlice";
import listReducer from "./listSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    lists: listReducer,
    common: commonReducer,
  },
});
