import React from "react";
import { Provider } from "react-redux";
import Todo from "./src/Screens/Todo";
import store from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
