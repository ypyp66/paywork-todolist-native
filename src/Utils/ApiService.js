import axios from "axios";
import { URL } from "../Constants/Api";

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = {
  count: 3,
  todoList: [
    {
      id: 0,
      content: "할 일 목록1",
      isCheck: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 1,
      content: "할 일 목록2",
      isCheck: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      content: "할 일 목록3",
      isCheck: true,
      createdAt: new Date().toISOString(),
    },
  ],
};

export const getPost = async () => {
  //todo를 가져오는 API호출
  const data = axios.get(`${URL}todo`);
  await sleep(1000); //API호출 딜레이 추가
  return posts;
};

export const createPost = async (todo) => {
  //todo item을 추가하기 위한 API호출
  const data = axios.post(`${URL}todo`);
  await sleep(500); //API호출 딜레이 추가
  return { status: 200, msg: "success" };
};

export const removePost = async (id) => {
  //todo item을 제거하기 위한 API호출
  const data = axios.delete(`${URL}todo/${id}`);
  await sleep(500); //API호출 딜레이 추가
  return { status: 200, msg: "success" };
};

export const updatePost = async ({ id, input }) => {
  //todo item을 업데이트하기 위한 API호출
  const data = axios.patch(`${URL}todo/${id}`, { content: input });
  await sleep(500); //API호출 딜레이 추가
  return { status: 200, msg: "success" };
};

export const togglePost = async ({ id, isCheck }) => {
  //todo item중 isCheck 속성을 변경하기 위한 API호출
  const data = axios.patch(`${URL}todo/${id}`, { isCheck: !isCheck });
  await sleep(500); //API호출 딜레이 추가
  return { status: 200, msg: "success" };
};
