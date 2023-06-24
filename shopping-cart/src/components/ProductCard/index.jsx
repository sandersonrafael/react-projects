import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { LiaCartPlusSolid } from 'react-icons/lia';
import brazilianCurrency from '../../utils/brazilianCurrency';
import SearchContext from '../../context/SearchContext';

import './ProductCard.css';

export default function ProductCard({ data }) {
  const { id, title, price, thumbnail } = data;

  const { cartProducts, setCartProducts } = useContext(SearchContext);

  const handleAddCart = () => {
    setCartProducts([
      ...cartProducts,
      {
        ...data,
        uniqueCode: `${id}${Math.round(Math.random() * 100000000)}`,
      },
    ]);
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.slice(0, -5) + 'W.jpg'}
        alt={title}
        className="card--image"
      />

      <div className="card--infos">
        <h2 className="card--price">{brazilianCurrency(price)}</h2>
        <h2 className="card--title">{title}</h2>
      </div>

      <button
        type="button"
        className="button--add-cart"
        onClick={handleAddCart}
      >
        <LiaCartPlusSolid className="cart-icon" /> Adicionar ao carrinho
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
