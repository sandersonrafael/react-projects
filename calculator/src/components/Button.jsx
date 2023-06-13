import P from 'prop-types';
import './Button.css';

const Button = (props) => {
  return (
    <button
      onClick={() => props.click && props.click(props.label)}
      className={`
      button
      ${props.operation ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
    `}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  label: P.string.isRequired,
  operation: P.bool,
  double: P.bool,
  triple: P.bool,
  click: P.func,
};

export default Button;
