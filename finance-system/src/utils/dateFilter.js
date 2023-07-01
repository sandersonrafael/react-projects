export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list, date) => {
  const newList = [];
  const [year, month] = date.split('-');

  for (let i in list) {
    list[i].date.getFullYear();
  }
};
