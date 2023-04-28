/**
 * Redux слайс который содержит в себе всю логику связанную с задачами
 * @module todoSlice
 * @function createSlice - Создает слайс
 *
 * @param {string} name - Название
 * @param {array} initialState - Начальное состояние
 * @param {object} reducers - Редюсеры
 *
 *
 * @param {object} state - состояние на данный момент
 * @param {object} action - данные действия
 *
 * @function addTodo - добавляет задание(объект) в состояние
 * @function toggleComplete - находит нужное задание меняет заначение completed
 * @function deleteTodo - удаляет нужное задание
 * @function toggleList - удаляет или добавляет список в состоянии
 */

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "today",
      completed: true,
      list: ["today"],
    },
    {
      id: 2,
      title: "important",
      completed: true,
      list: ["today", "important"],
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.length + 1,
        title: action.payload.title,
        completed: false,
        list: [action.payload.list],
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleList: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (action.payload.toggle) {
        state[index].list.push(`${action.payload.list}`);
      } else {
        state[index].list = state[index].list.filter(
          (list) => list !== action.payload.list
        );
      }
    },
  },
});

/** @exports todoSlice.actions - экспортирует действия */

export const { addTodo, toggleComplete, deleteTodo, toggleList } =
  todoSlice.actions;

/**
 * @default
 *  @exports todoSlice.reducer - экспортирует по-умолчанию редюсер всего слайса
 */
export default todoSlice.reducer;
