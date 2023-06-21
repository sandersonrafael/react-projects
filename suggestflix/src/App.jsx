import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieSection from './components/MovieSection';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

import './App.css';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const popular = list.filter((item) => item.slug === 'popular')[0];
      let chosen;
      do {
        const chooseRandom = Math.round(
          Math.random() * (popular.items.results.length - 1)
        );
        chosen = popular.items.results[chooseRandom];
      } while (
        !(
          chosen.original_language === 'pt' ||
          chosen.original_language === 'en' ||
          chosen.original_language === 'es'
        )
      );
      const chosenInfo = await Tmdb.getContentInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) setBlackHeader(true);
      else setBlackHeader(false);
    };
    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <span>
          Desenvolvido por
          <a
            href="http://linkedin.com/in/sandersonrafael"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Sanderson Rafael
          </a>
        </span>
      </footer>
    </div>
  );
}

// fazer modal ao clicar no filme, com as informações similares ao filme principal e com x para fechar
