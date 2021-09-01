import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  createTodo,
  setTodos,
} from "../Store/Actions/todoAction";
import Storage from "./StorageService";

export const TodoService = () => {
  const todoState = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  });

  useEffect(() => {
    saveData();
  }, [todoState]);

  const saveData = () => {
    Storage.set(todoState);
  };

  const loadData = useCallback(() => {
    const data = Storage.get();
    console.log("data", data);
  }, []);

  const createItem = useCallback(
    (todo) => dispatch(createTodo(todo)),
    [todoState]
  );

  const toggleChecked = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [todoState]
  );

  const removeItem = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [todoState]
  );

  return {
    todoState,
    toggleChecked,
    removeItem,
    createItem,
  };
};
