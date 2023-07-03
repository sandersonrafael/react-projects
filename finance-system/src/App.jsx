import { useEffect, useState } from 'react';
import * as C from './App.styles';

import TableArea from './components/TableArea';
import InfoArea from './components/InfoArea';

import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './utils/dateFilter';

function App() {
  const [list] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let effectIncome = 0;
    let effectExpense = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense)
        effectExpense += filteredList[i].value;
      else effectIncome += filteredList[i].value;
    }

    setIncome(effectIncome);
    setExpense(effectExpense);
  }, [filteredList]);

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
