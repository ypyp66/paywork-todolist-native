import { STORAGE_NAME } from "../Constants/StorageName";

const Storage = {
  set: (todos) => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos));
  },
  get: () => {
    const data = localStorage.getItem(STORAGE_NAME);
    console.log(data);
  },
};

export default Storage;
