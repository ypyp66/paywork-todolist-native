import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  SET_TODOS,
} from "./types";

export const setTodos = (todo) => {
  return {
    type: SET_TODOS,
    todos,
  };
};

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    todo,
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
