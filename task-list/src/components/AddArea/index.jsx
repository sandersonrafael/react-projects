import { FaPlus } from 'react-icons/fa';

import * as C from './styles';
import { useState } from 'react';

export default function AddArea() {
  const [newTask, setNewTask] = useState('');

  return (
    <C.Container>
      <div className="image">
        <FaPlus />
      </div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
    </C.Container>
  );
}
