import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoLists() {
  const datas = useSelector((state) => state.todo);

  return (
    <View style={styles.container}>
      {datas.map((data) => (
        <TodoItem key={data.id} id={data.id} data={data} />
      ))}
    </View>
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
