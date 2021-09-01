import {
  GET_TODOS_SUCCESS,
  CREATE_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  FAILURE,
} from "../Actions/types";

const initialState = {
  todoLists: [],
  error: false,
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      console.log("todo success");
      return { error: action.error, todoLists: [...action.payload] };

    case CREATE_TODO_SUCCESS:
      console.log("create success");
      return {
        error: action.error,
        todoLists: [...state.todoLists, action.payload],
      };

    case REMOVE_TODO_SUCCESS:
      console.log(state, action.payload);
      return {
        ...state,
        todoLists: state.todoLists.filter((item) => item.id !== action.payload),
      };
    case UPDATE_TODO_SUCCESS:
      console.log(state, action.payload);
      return {
        ...state,
        todoLists: state.todoLists.map((item) =>
          item.id === action.payload.id
            ? { ...item, content: action.payload.input }
            : item
        ),
      };

    case TOGGLE_TODO_SUCCESS:
      console.log("toggle_todo_success");
      return {
        ...state,
        todoLists: state.todoLists.map((item) =>
          item.id === action.payload.id
            ? { ...item, isCheck: !item.isCheck }
            : item
        ),
      };
    case FAILURE:
      console.log("failure");
      return { ...state, error: action.error };
    default:
      return state;
  }
}
