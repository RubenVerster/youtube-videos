import React, { useState } from 'react';
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  //not needed since we use it inline in the 'return'
  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // };
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
