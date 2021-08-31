import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../Store/Actions/todoAction";

function Header() {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const submitTodo = () => {
    dispatch(createTodo(todoInput));
    setTodoInput("");
  };
  const changeInput = (input) => {
    setTodoInput(input);
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter new todo"
          autoCorrect={false}
          value={todoInput}
          onChangeText={changeInput}
        />
        <TouchableOpacity onPressOut={submitTodo}>
          <MaterialCommunityIcons
            style={styles.addBtn}
            size={30}
            name="plus-circle"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    flex: 1,
  },
  addBtn: {
    color: "#4169E1",
  },
});

export default Header;
