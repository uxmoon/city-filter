import React, { useState } from 'react';

const Search = () => {
  /* init state */
  const [term, setTerm] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search city</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
