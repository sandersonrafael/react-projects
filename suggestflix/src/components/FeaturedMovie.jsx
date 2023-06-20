import './FeaturedMovie.css';
import { FaRegPlayCircle, FaPlus } from 'react-icons/fa';

export default function FeaturedMovie({ item }) {
  const firstDate = new Date(item.first_air_date).getFullYear();
  const genres = [];
  for (let genre of item.genres) { // eslint-disable-line
    genres.push(genre.name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">
            {item.name ?? item.original_name}
          </div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate}</div>
            <div className="featured--seasons">
              {item.number_of_seasons}
              {item.number_of_seasons === 1 ? ' temporada' : ' temporadas'}
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <a
                href={item.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="featured--watchbutton"
              >
                <FaRegPlayCircle /> Assistir
              </a>
              <a href="/#" className="featured--mylistbutton">
                <FaPlus /> Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: {genres.join(', ')}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
