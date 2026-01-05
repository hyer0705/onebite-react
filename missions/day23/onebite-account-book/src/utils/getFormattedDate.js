export const getFormattedDate = (targetDate) => {
  const date = new Date(targetDate);

  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};
