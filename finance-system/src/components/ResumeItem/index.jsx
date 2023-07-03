import PropTypes from 'prop-types';

import * as C from './styles';

export default function ResumeItem({ title, value, hasColor }) {
  const setColor = () => {
    return !hasColor || value === 0 ? 'black' : value > 0 ? 'green' : 'red';
  };

  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info style={{ color: setColor() }}>
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </C.Info>
    </C.Container>
  );
}

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  hasColor: PropTypes.bool,
};
