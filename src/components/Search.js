import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  /* init state */
  const [term, setTerm] = useState('');

  /* API request using useEffect */
  useEffect(() => {
    const search = async () => {
      await axios.get('http://localhost:3030/cities', {
        params: {
          offset: 0,
          limit: 10,
          filter: term,
        },
      });
    };

    search();
  }, [term]);

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
