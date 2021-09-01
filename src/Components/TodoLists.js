import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoLists({ todoState, removeItem, toggleChecked, updateItem }) {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.id.toString()}
      data={todoState}
      renderItem={({ item }) => (
        <TodoItem
          data={item}
          removeItem={removeItem}
          toggleChecked={toggleChecked}
          updateItem={updateItem}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "scroll",
  },
});

export default TodoLists;
