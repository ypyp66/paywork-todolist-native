import getNextId from "../../Utils/getNextId";
import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
} from "../Actions/types";

const initialState = [
  {
    id: 0,
    content: "할 일 하기1",
    isChecked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 1,
    content: "할 일 하기2",
    isChecked: true,
    createdAt: new Date().toISOString(),
  },
];

export default function todo(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      const nextId = getNextId(state) + 1;
      console.log(nextId);
      const newTodo = {
        id: nextId,
        content: action.todoItem,
        isChecked: false,
        createdAt: new Date().toISOString(),
      };
      return [...state, newTodo];

    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.id);
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === action.id ? { ...item, isChecked: !item.isChecked } : item
      );

    default:
      return state;
  }
}
