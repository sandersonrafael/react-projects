import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <form className="search-bar">
      <input
        type="search"
        placeholder="Buscar produto"
        className="search--input"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
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
