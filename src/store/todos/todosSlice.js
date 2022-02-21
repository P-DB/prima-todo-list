import { createSlice } from "@reduxjs/toolkit";

const initState = [
  {
    id: 0,
    description: "lorem ipsum",
    completed: true,
    highPriority: false,
  },
  {
    id: 1,
    description: "dolor sit amet",
    completed: false,
    highPriority: false,
  },
  {
    id: 2,
    description: "Brow Jenkin",
    completed: false,
    highPriority: true,
  },
  {
    id: 3,
    description: "Brow Jenkin",
    completed: true,
    highPriority: true,
  },
  {
    id: 4,
    description: "Gatsu",
    completed: false,
    highPriority: true,
  },
];

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
