import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decreaseAsync, increaseAsync } from "../Store/Actions/counterAction";

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => dispatch(increaseAsync())} />
        <Button title="-" onPress={() => dispatch(decreaseAsync())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
});

export default Counter;
