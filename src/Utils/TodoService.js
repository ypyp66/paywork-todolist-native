import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getNextId from "../Utils/getNextId";
import {
  toggleTodo,
  removeTodo,
  createTodo,
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
    //새로운 todo item을 생성한 후 createTodo 함수를 호출
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
    //todo item의 isCheck를 바꾸기 위해 id와 isCheck 값을 파라미터로 받음
    dispatch(toggleTodo(id, isCheck));
  };

  const removeItem = (id) => {
    //todo item을 삭제하기 위해 id를 파라미터로 받음
    dispatch(removeTodo(id));
  };

  const updateItem = (id, input) => {
    //todo item의 텍스트를 바꾸기 위해 id와 변경할 값을 파라미터로 받음
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
