import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  GET_TODOS,
} from "./types";

export const getTodos = () => ({ type: GET_TODOS }); //초기 todo를 가져오기 위한 함수

export const createTodo = (todo) => {
  //todo를 추가하기 위한 함수
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => ({
  //todo를 제거하기 위한 함수
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (id, input) => ({
  //todo를 업데이트하기 위한 함수
  type: UPDATE_TODO,
  payload: { id, input },
});

export const toggleTodo = (id, isCheck) => ({
  //todo의 isCheck 속성의 값을 변경하기 위한 함수
  type: TOGGLE_TODO,
  payload: { id, isCheck },
});
