function getNextId(todoLists) {
  return todoLists.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0);
}

export default getNextId;
