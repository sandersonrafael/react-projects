import { useState } from 'react';

import ListItem from './components/ListItem';
import AddArea from './components/AddArea';
import * as C from './App.styles';

function App() {
  const [list, setList] = useState([]);

  const handleAddTask = (taskName) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            context={{ list: list, setList: setList }}
            item={item}
            key={index}
            index={index}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
