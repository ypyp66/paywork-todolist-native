import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getNextId from "../Utils/getNextId";
import {
  toggleTodo,
  removeTodo,
  createTodo,
  setTodos,
  getTodos,
  updateTodo,
} from "../Store/Actions/todoAction";

export const TodoService = () => {
  //todo 초기값 및 todo item에 공통적으로 동작하는 함수들을 한번에 관리하기 위한 함수
  const todoState = useSelector((state) => state.todo.todoLists);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => dispatch(getTodos()); //초기 todo를 가져오기 위함

  const createItem = (todo) => {
    const nextId = getNextId(todoState) + 1;
    const newTodo = {
      id: nextId,
      content: todo,
      isCheck: false,
      createdAt: new Date().toISOString(),
    };
    dispatch(createTodo(newTodo));
  };

  const toggleChecked = (id, isCheck) => {
    dispatch(toggleTodo(id, isCheck));
  };

  const removeItem = (id) => {
    dispatch(removeTodo(id));
  };

  const updateItem = (id, input) => {
    dispatch(updateTodo(id, input));
  };

  return {
    todoState,
    toggleChecked,
    removeItem,
    createItem,
    updateItem,
  };
};
