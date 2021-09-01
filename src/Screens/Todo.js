import React, { useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TodoLists from "../Components/TodoLists";
import TodoCreate from "../Components/TodoCreate";
import styled from "styled-components/native";
import { TodoService } from "../Utils/TodoService";
import { getTodos } from "../Store/Actions/todoAction";
import { useDispatch, useSelector } from "react-redux";
import Alerts from "../Components/Alert";

function Todo() {
  const { todoState, createItem, removeItem, toggleChecked, updateItem } =
    TodoService();
  const error = useSelector((state) => state.todo.error);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text style={styles.title}>Todo App</Text>
      {error && Alerts()}
      <TodoCreate createItem={createItem} />
      <TodoLists
        todoState={todoState}
        removeItem={removeItem}
        toggleChecked={toggleChecked}
        updateItem={updateItem}
      />
    </Container>
  );
}

export default Todo;

const Container = styled.View`
  display: flex;
  background-color: #eee;
  height: 100%;
  padding: 20px;
`;

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
});
