import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieSection from './components/MovieSection';
import './App.css';

export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
