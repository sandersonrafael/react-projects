import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieSection from './components/MovieSection';
import FeaturedMovie from './components/FeaturedMovie';

import './App.css';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const popular = list.filter((item) => item.slug === 'popular')[0];
      const chooseRandom = Math.floor(
        Math.random() * (popular.items.results.length - 1)
      );
      const chosen = popular.items.results[chooseRandom];
      console.log(chosen);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

// fazer modal ao clicar no filme, com as informações similares ao filme principal e com x para fechar
