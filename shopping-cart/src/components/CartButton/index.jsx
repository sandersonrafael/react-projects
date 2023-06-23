import React from 'react';
import { BsCart2 } from 'react-icons/bs';

import './CartButton.css';

export default function CartButton() {
  return (
    <button type="submit" className="cart--button">
      <BsCart2 />
      <span className="cart-status">1</span>
    </button>
  );
}
