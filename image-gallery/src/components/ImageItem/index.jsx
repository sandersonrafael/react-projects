import PropTypes from 'prop-types';

import * as C from './styles';

export const ImageItem = ({ item }) => {
  return (
    <C.Container>
      <img src={item.url} alt={item.name} />
      {item.name}
    </C.Container>
  );
};

ImageItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
