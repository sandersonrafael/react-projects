const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE = import.meta.env.VITE_BASE_URL;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      { slug: 'originals', title: 'Originais do Netflix', items: [] },
      { slug: 'trending', title: 'Recomendados para Você', items: [] },
      { slug: 'action', title: 'Ação', items: [] },
      { slug: 'comedy', title: 'Comédia', items: [] },
      { slug: 'horror', title: 'Terror', items: [] },
      { slug: 'romance', title: 'Romance', items: [] },
      { slug: 'documentary', title: 'Documentários', items: [] },
    ];
  },
};
