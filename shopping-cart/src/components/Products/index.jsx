import React, { useEffect, useState } from 'react';
import fetchProducts from '../../api/fetchProducts.js';
import ProductCard from '../ProductCard';

import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((res) => setProducts(res));
  }, []);
  
  return (
    <section className="products container">
      {products.map(product => <ProductCard data={product} key={product.id} />)}
    </section>
  );
}
