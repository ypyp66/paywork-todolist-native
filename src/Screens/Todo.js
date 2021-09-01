import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { TodoLists, TodoCreate, Alerts } from "../Components";
import { TodoService } from "../Utils/TodoService";
import { useSelector } from "react-redux";

function Todo() {
  const { todoState, createItem, removeItem, toggleChecked, updateItem } =
    TodoService();
  const error = useSelector((state) => state.todo.error);

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
