import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoLists from "../Components/TodoLists";
import TodoCreate from "../Components/TodoCreate";
import styled from "styled-components/native";

function Todo() {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TodoCreate />
      <TodoLists />
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
