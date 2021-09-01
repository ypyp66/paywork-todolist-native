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
  const data = axios.get(`${URL}todo`);
  await sleep(1000);
  return posts;
};

export const createPost = async (todo) => {
  const data = axios.post(`${URL}todo`);
  await sleep(100);
  return { status: 200, msg: "success" };
};

export const removePost = async (id) => {
  const data = axios.delete(`${URL}todo/${id}`);
  await sleep(100);
  return { status: 200, msg: "success" };
};

export const updatePost = async ({ id, input }) => {
  const data = axios.patch(`${URL}todo/${id}`, { content: input });
  await sleep(100);
  return { status: 200, msg: "success" };
};

export const togglePost = async ({ id, isCheck }) => {
  const data = axios.patch(`${URL}todo/${id}`, { isCheck: !isCheck });
  await sleep(100);
  return { status: 200, msg: "success" };
};
