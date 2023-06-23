import React from 'react';
import propTypes from 'prop-types';
import { LiaCartPlusSolid } from 'react-icons/lia';
import brazilianCurrency from '../../utils/brazilianCurrency';

import './ProductCard.css';

export default function ProductCard({ data }) {
  const { title, price } = data;
  const thumbnail = data.thumbnail.slice(0, -5) + 'W.jpg';

  return (
    <section className="product-card">
      <img src={thumbnail} alt={title} className="card--image" />

      <div className="card--infos">
        <h2 className="card--price">{brazilianCurrency(price)}</h2>
        <h2 className="card--title">{title}</h2>
      </div>

      <button type="button" className="button--add-cart">
        <LiaCartPlusSolid className="cart-icon" /> Adicionar ao carrinho
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
