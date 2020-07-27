import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search">
      <form onSubmit={onSubmit} >
        <div>
         
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
           <label>ابحث عن فيديو</label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;