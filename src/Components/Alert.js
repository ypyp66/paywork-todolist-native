import React from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { getTodos } from "../Store/Actions/todoAction";
function Alerts() {
  const dispatch = useDispatch();
  return Alert.alert(
    // 말그대로 Alert를 띄운다
    "에러 발생", // 첫번째 text: 타이틀 제목
    "다시 로딩할까요?", // 두번째 text: 그 밑에 작은 제목
    [
      // 버튼 배열
      {
        text: "아니오", // 버튼 제목

        style: "cancel",
      },
      { text: "네", onPress: () => dispatch(getTodos()) }, //버튼 제목
      // 이벤트 발생시 로그를 찍는다
    ],
    { cancelable: false }
  );
}

export default Alerts;
