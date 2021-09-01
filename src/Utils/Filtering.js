const Filtering = (filterName, todoState) => {
  console.log(todoState);
  const newTodos = [...todoState];

  switch (filterName) {
    case "asc":
      newTodos.sort((prev, next) => next.id - prev.id);
      break;
    case "desc":
      newTodos.sort((prev, next) => prev.id - next.id);
      break;
    default:
      break;
  }
  return newTodos;
};

export default Filtering;
