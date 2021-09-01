import URL from "../Constants/Api";

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = {
  count: posts.todoList.length,
  todoList: [
    {
      id: 0,
      content: "할 일 목록1",
      isChecked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 1,
      content: "할 일 목록2",
      isChecked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      content: "할 일 목록3",
      isChecked: false,
      createdAt: new Date().toISOString(),
    },
  ],
};

export const getPost = async () => {
  const data = await axios.get(`${URL}/todo`);
  await sleep(500);
  return posts;
};
