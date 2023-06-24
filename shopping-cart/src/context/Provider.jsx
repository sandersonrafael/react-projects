import React, { useState } from 'react';
import SearchContext from './SearchContext';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    cartProducts,
    setCartProducts,
    cartVisible,
    setCartVisible,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;
