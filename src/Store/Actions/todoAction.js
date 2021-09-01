import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  GET_TODOS,
} from "./types";

export const getTodos = () => ({ type: GET_TODOS });

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (id, input) => ({
  type: UPDATE_TODO,
  payload: { id, input },
});

export const toggleTodo = (id, isCheck) => ({
  type: TOGGLE_TODO,
  payload: { id, isCheck },
});
