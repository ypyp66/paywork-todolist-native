import getNextId from "../../Utils/getNextId";
import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  SET_TODOS,
} from "../Actions/types";

const initialState = [];

export default function todo(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    case CREATE_TODO:
      const nextId = getNextId(state) + 1;
      console.log(nextId);
      const newTodo = {
        id: nextId,
        content: action.todo,
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
