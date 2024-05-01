export const formatDate = (timeStamp: number) => {
  const date = new Date(timeStamp);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
