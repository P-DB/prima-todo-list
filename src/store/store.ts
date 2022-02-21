import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todosSlice';
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
