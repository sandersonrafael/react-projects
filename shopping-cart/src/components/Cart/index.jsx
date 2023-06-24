import React, { useContext } from 'react';
import CartProduct from '../CartProduct';
import SearchContext from '../../context/SearchContext';
import brazilianCurrency from '../../utils/brazilianCurrency';

import './Cart.css';

export default function Cart() {
  const { cartProducts, cartVisible } = useContext(SearchContext);

  const totalValue = cartProducts.reduce((sum, { price }) => sum + price, 0);

  return (
    <section className={`cart${cartVisible ? ' cart--active' : ''}`}>
      <div className="cart-products">
        {cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.uniqueCode} data={cartProduct} />
        ))}
      </div>
      <div className="cart-resume">{brazilianCurrency(totalValue)}</div>
    </section>
  );
}
