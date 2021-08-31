import { CREATE_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_TODO } from "./types";

export const createTodo = (todoItem) => {
  return {
    type: CREATE_TODO,
    todoItem,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const updateTodo = (id) => {
  return {
    type: UPDATE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
