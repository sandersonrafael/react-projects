import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import SearchContext from '../../context/SearchContext';

import './SearchBar.css';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setProducts } = useContext(SearchContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProducts([]);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar produto"
        className="search--input"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button 
        type="submit" 
        className="search--button"
      >
        <BsSearch />
      </button>
  
    </form>
  );
}
