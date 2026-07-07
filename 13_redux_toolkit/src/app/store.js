import { configureStore } from "@reduxjs/toolkit";
import reducers from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: reducers,
});
// Configure store (Store create kryu)
