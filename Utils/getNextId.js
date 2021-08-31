function getNextId(todos) {
  return todos.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0);
}

export default getNextId;
