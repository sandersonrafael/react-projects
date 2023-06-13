import P from 'prop-types';
import './Display.css';

const Display = (props) => <div className="display">{props.value}</div>;

Display.propTypes = {
  value: P.string.isRequired,
};

export default Display;
