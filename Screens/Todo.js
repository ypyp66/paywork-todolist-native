import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoLists from "../Components/TodoLists";
import TodoCreate from "../Components/TodoCreate";
import styled from "styled-components/native";
import { TodoService } from "../Utils/TodoService";

function Todo() {
  const { todoState, createItem, removeItem, toggleChecked } = TodoService();
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TodoCreate createItem={createItem} />
      <TodoLists
        todoState={todoState}
        removeItem={removeItem}
        toggleChecked={toggleChecked}
      />
    </Container>
  );
}

export default Todo;

const Container = styled.View`
  display: flex;
  background-color: #eee;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
});
