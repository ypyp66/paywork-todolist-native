function getNextId(todoLists) {
  //todo item 중 가장 큰 id값을 반환함
  return todoLists.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0);
}

export default getNextId;
