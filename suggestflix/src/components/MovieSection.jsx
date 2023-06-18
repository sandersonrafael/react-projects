import './MovieSection.css';

export default function MovieSection({ title, items }) {
  return (
    <div className="movieSection">
      <h2>{title}</h2>
      <div className="movieSection--listarea">
        <div className="movieSection--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => {
              return item.poster_path ? (
                <div className="movieSection--item" key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              ) : (
                ''
              );
            })}
        </div>
      </div>
    </div>
  );
}
