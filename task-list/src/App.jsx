import { useState } from 'react';

import ListItem from './components/ListItem';
import AddArea from './components/AddArea';
import * as C from './App.styles';

function App() {
  const [list, setList] = useState([
    {id: 1, name: 'Comprar comida', done: false},
    {id: 2, name: 'Comprar vassoura', done: false},
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea />

        {list.map((item, index) => (
          <ListItem item={item} key={index}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
