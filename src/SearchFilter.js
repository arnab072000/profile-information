
import React, { useState } from 'react';

const SearchFilter = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFilter;
