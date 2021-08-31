import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../Store/Actions/todoAction";

function TodoItem({ data }) {
  const dispatch = useDispatch();
  const toggleChecked = () => {
    dispatch(toggleTodo(data.id));
  };

  const clickRemove = () => {
    dispatch(removeTodo(data.id));
  };
  return (
    <TodoContainer>
      <View style={styles.todoText}>
        <TouchableOpacity
          style={styles.todoCheckbox}
          onPressOut={toggleChecked}
        >
          <MaterialCommunityIcons
            size={20}
            name={
              data.isChecked
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
          />
        </TouchableOpacity>
        <TodoContent isChecked={data.isChecked}>{data.content}</TodoContent>
      </View>
      <TouchableOpacity onPressOut={clickRemove}>
        <MaterialCommunityIcons
          style={styles.todoDelBtn}
          size={30}
          name="delete-outline"
        />
      </TouchableOpacity>
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
    props.isChecked &&
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
});

export default TodoItem;
