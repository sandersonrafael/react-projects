import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import brazilianCurrency from '../../utils/brazilianCurrency';
import PropTypes from 'prop-types';

import './CartProduct.css';
import SearchContext from '../../context/SearchContext';

export default function CartProduct({ data }) {
  const { cartProducts, setCartProducts } = useContext(SearchContext);

  const { thumbnail, title, price, uniqueCode } = data;
  const removeItem = (code) => {
    setCartProducts(cartProducts.filter((product) => product.uniqueCode !== code));
  };

  return (
    <section className="cart-product">
      <img src={thumbnail} alt={title} className="cart-product-image" />

      <div className="cart-product-content">
        <h3 className="cart-product-title">{title}</h3>

        <h3 className="cart-product-price">{brazilianCurrency(price)}</h3>

        <button
          type="button"
          className="button--remove-item"
          onClick={() => removeItem(uniqueCode)}
        >
          <BsCartX />
        </button>
      </div>
    </section>
  );
}

CartProduct.propTypes = {
  data: PropTypes.object,
}.isRequired;
