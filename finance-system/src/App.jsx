import { useEffect, useState } from 'react';
import * as C from './App.styles';

import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './utils/dateFilter';

function App() {
  const [list, setList] = useState(items);
  const [filteredList, getFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {

  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        ...
      </C.Body>
    </C.Container>
  );
}

export default App;
