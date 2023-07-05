import PropTypes from 'prop-types';

import * as C from './styles';
import { useState } from 'react';

export default function ListItem({ item, context, index }) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(() => {
          context.setList(() => {
            const newList = [...context.list];
            newList[index].done = !isChecked;
            return newList;
          });
          console.log(context.list);
          return e.target.checked;
        })}
        id={'checkbox-task-' + item.id}
      />
      <label htmlFor={'checkbox-task-' + item.id}>
        {item.name}
      </label>
    </C.Container>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  context: PropTypes.shape({
    list: PropTypes.array,
    setList: PropTypes.func,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
