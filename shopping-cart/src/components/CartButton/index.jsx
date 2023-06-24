import React, { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';

import './CartButton.css';
import SearchContext from '../../context/SearchContext';

export default function CartButton() {
  const { cartProducts, cartVisible, setCartVisible } = useContext(SearchContext);

  return (
    <button
      type="submit"
      className="cart--button"
      onClick={() => setCartVisible(!cartVisible)}
    >
      <BsCart2 />
      <span
        className="cart-status"
        style={{ display: cartProducts.length > 0 ? 'flex' : 'none' }}
      >
        {cartProducts.length}
      </span>
    </button>
  );
}
