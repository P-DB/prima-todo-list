import { createSlice } from "@reduxjs/toolkit";

const initState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload
          };
        }
        return todo;
      });
    }
  },
});

export const { addTodo, removeTodos, updateTodos } = todoSlice.actions;

export default todoSlice.reducer;
