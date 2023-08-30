import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
