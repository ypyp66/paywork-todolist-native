import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TodoItem({ data, toggleChecked, removeItem, updateItem }) {
  const [update, setUpdate] = useState(false);
  const [input, setInput] = useState(data.content);

  const handleChange = (text) => {
    setInput(text);
  };

  const handleToggle = () => {
    console.log("handle", data.id, data.isCheck);
    toggleChecked(data.id, data.isCheck);
  };

  const handleRemove = () => {
    removeItem(data.id);
  };

  const handleEdit = () => {
    setUpdate(true);
  };

  const handleUpdate = () => {
    setUpdate(false);
    updateItem(data.id, input);
  };
  return (
    <TodoContainer>
      <View style={styles.todoText}>
        <TouchableOpacity style={styles.todoCheckbox} onPressOut={handleToggle}>
          <MaterialCommunityIcons
            size={20}
            name={
              data.isCheck
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
          />
        </TouchableOpacity>
        {!update ? (
          <TodoContent isCheck={data.isCheck}>{data.content}</TodoContent>
        ) : (
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={handleChange}
            onEndEditing={handleUpdate}
          />
        )}
      </View>
      <View style={styles.IconContainer}>
        <TouchableOpacity onPressOut={handleEdit}>
          <MaterialCommunityIcons
            style={styles.todoDelBtn}
            name="square-edit-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPressOut={handleRemove}>
          <MaterialCommunityIcons
            style={styles.todoDelBtn}
            size={30}
            name="delete-outline"
          />
        </TouchableOpacity>
      </View>
    </TodoContainer>
  );
}

const TodoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom-color: lightblue;
  border-bottom-width: 1px;
`;

const TodoContent = styled.Text`
  color: black;
  ${(props) =>
    props.isCheck &&
    css`
      text-decoration: line-through;
      color: #bbb;
    `};
`;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  todoCheckbox: {
    marginRight: 5,
  },
  todoText: {
    flexDirection: "row",
  },
  todoDelBtn: {
    color: "#777",
  },
  IconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: 230,
  },
});

export default TodoItem;
