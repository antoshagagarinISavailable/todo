export const paginate = (items, pageNumber, pageSize) => {
  const start = (pageNumber - 1) * pageSize;
  return [...items].splice(start, pageSize);
};
