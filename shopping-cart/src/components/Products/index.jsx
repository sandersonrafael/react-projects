import React, { useContext, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts.js';
import ProductCard from '../ProductCard';
import Loading from '../Loading/index.jsx';
import SearchContext from '../../context/SearchContext.js';

import './Products.css';

export default function Products() {
  const { products, setProducts } = useContext(SearchContext);

  useEffect(() => {
    fetchProducts('iphone').then((res) => setProducts(res));
  }, []);

  return (
    <section className="products container">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
}
