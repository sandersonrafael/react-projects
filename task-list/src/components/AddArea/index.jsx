import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import * as C from './styles';
import { useState } from 'react';

export default function AddArea({ onEnter }) {
  const [newTask, setNewTask] = useState('');

  const handleKeyUp = (e) => {
    if (e.code === 'Enter' && newTask !== '') {
      onEnter(newTask);
      setNewTask('');
    }
  };

  return (
    <C.Container>
      <div className="image" onClick={() => handleKeyUp({ code: 'Enter' })}>
        <FaPlus />
      </div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}

AddArea.propTypes = {
  onEnter: PropTypes.func.isRequired,
};
