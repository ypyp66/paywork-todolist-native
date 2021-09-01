import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "../../Utils/ApiService";
import { getTodos } from "../Actions/todoAction";
import {
  GET_TODOS_SUCCESS,
  GET_TODOS,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO,
  FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO,
} from "../Actions/types";

function* getTodoSaga() {
  //todoItem을 비동기적으로 가져오기 위한 함수
  try {
    const todos = yield call(api.getPost);
    //call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: todos.todoList,
      error: false,
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      error: true,
      payload: e,
    }); // 실패 액션 디스패치
  }
}

function* createTodoSaga(action) {
  //todoItem을 비동기적으로 생성하기 위한 함수
  try {
    const todos = yield call(api.createPost, action.payload);
    yield put({
      type: CREATE_TODO_SUCCESS,
      payload: action.payload,
      error: false,
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      error: true,
      payload: e,
    });
  }
}

function* removeTodoSaga(action) {
  //todoItem을 비동기적으로 삭제하기 위한 saga함수
  try {
    const todos = yield call(api.removePost, action.payload);
    yield put({
      type: REMOVE_TODO_SUCCESS,
      payload: action.payload,
      error: false,
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      error: true,
      payload: e,
    });
  }
}

function* updateTodoSaga(action) {
  //todoItem의 content 값을 비동기적으로 바꾸기 위한 saga함수
  try {
    const todos = yield call(api.updatePost, action.payload);
    yield put({
      type: UPDATE_TODO_SUCCESS,
      payload: action.payload,
      error: false,
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      error: true,
      payload: e,
    });
  }
}

function* toggleTodoSaga(action) {
  //isCheck의 값을 비동기적으로 바꾸기 위한 saga함수
  try {
    const todos = yield call(api.togglePost, action.payload);
    yield put({
      type: TOGGLE_TODO_SUCCESS,
      payload: action.payload,
      error: false,
    });
  } catch (e) {
    yield put({
      type: FAILURE,
      error: true,
      payload: e,
    });
  }
}

export function* todoSaga() {
  //액션들을 모니터링 하기 위한 함수
  yield takeLatest(GET_TODOS, getTodoSaga); // action.type이 GET_TODOS인 경우 getTodosSaga 실행
  yield takeEvery(CREATE_TODO, createTodoSaga);
  yield takeEvery(REMOVE_TODO, removeTodoSaga);
  yield takeLatest(UPDATE_TODO, updateTodoSaga);
  yield takeLatest(TOGGLE_TODO, toggleTodoSaga);
}
