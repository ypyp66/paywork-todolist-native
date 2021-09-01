import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoLists({ todoState, removeItem, toggleChecked }) {
  return (
    // <View style={styles.container}>
    //   {todoState.map((item) => (
    //     <TodoItem
    //       key={item.id}
    //       id={item.id}
    //       data={item}
    //       removeItem={removeItem}
    //       toggleChecked={toggleChecked}
    //     />
    //   ))}
    // </View>
    <FlatList
      keyExtractor={(item) => item.id}
      data={todoState}
      renderItem={({ item }) => (
        <TodoItem
          data={item}
          removeItem={removeItem}
          toggleChecked={toggleChecked}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "scroll",
  },
});

export default TodoLists;
