import PropTypes from 'prop-types';

import * as C from './styles';

export default function ListItem({ item, context }) {
  const { name, id, done } = item;
  const { list, setList } = context;

  const handleChange = () => {
    const spreadList = [...list];
    const index = spreadList.findIndex(option => id === option.id);
    spreadList[index].done = !done;
    return setList(spreadList);
  };

  return (
    <C.Container done={done}>
      <input
        type="checkbox"
        checked={done}
        onChange={handleChange}
        id={'checkbox-task-' + id}
      />
      <label htmlFor={'checkbox-task-' + id}>{name}</label>
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
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
      }).isRequired,
    ).isRequired,
    setList: PropTypes.func.isRequired,
  }).isRequired,
};
