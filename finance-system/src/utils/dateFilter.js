export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list, date) => {
  const newList = [];
  const [year, month] = date.split('-');

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1) === parseInt(month)
    )
      newList.push(list[i]);
  }
  return newList;
};

const hasZeroOrNot = (value) => value < 10 ? `0${value}` : value;

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${hasZeroOrNot(day)}/${hasZeroOrNot(month)}/${year}`;
};
