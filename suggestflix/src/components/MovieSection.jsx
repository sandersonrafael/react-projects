import { useRef, useState } from 'react';
import './MovieSection.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function MovieSection({ title, items }) {
  const movieList = useRef(null);
  const [scrlX, setScrlX] = useState(/* -3680 + window.innerWidth */ 0);
  const handleFaAngleLeft = () => {
    const sectionWidth = movieList.current.clientWidth;
    const newScrlX = scrlX + sectionWidth / 10;
    setScrlX(newScrlX > 0 ? 0 : newScrlX);
  };

  const handleFaAngleRight = () => {
    const sectionWidth = movieList.current.clientWidth;
    const maxSectionWidth = -sectionWidth - 80 + window.innerWidth;
    const newScrlX = scrlX - sectionWidth / 10;
    if (newScrlX <= maxSectionWidth) return setScrlX(maxSectionWidth);
    return setScrlX(newScrlX);
  };

  return (
    <div className="movieSection">
      <h2>{title}</h2>
      <FaAngleLeft className="fa-angle-left" onClick={handleFaAngleLeft} />
      <FaAngleRight className="fa-angle-right" onClick={handleFaAngleRight} />
      <div className="movieSection--listarea" style={{ marginLeft: scrlX }}>
        <div className="movieSection--list" ref={movieList}>
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
