import React from "react";
import { Provider } from "react-redux";
import Todo from "./Screens/Todo";
import store from "./Store";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
