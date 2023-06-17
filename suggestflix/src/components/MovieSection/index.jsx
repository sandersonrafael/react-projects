import PropTypes from 'prop-types';

import { Div } from './styles';

export default function MovieSection({ title, items }) {
  return (
    <Div>
      <h2>{title}</h2>
      <div className="movieSection--listarea">
        {items.results.length > 0 &&
          items.results.map((item, key) => {
            return item.poster_path ? (
              <img
                key={key}
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.original_title}
              />
            ) : (
              ''
            );
          })}
      </div>
    </Div>
  );
}

MovieSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};
// src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
// alt={item.original_title}
