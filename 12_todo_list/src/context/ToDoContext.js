import { useContext, createContext } from "react";

const TodoData = [
  {
    id: 1,
    title: "",
    completed: false,
  },
];

const ToDoContext = createContext({
  todo: TodoData,
  addTodo: (toDo) => {},
  updateTodo: (id, toDo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useTodo = () => useContext(ToDoContext);

export { ToDoContext };
