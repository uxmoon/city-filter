import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  /* init state */
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  /* API request using useEffect */
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('http://localhost:3030/cities', {
        params: {
          offset: 0,
          limit: 10,
          filter: term,
        },
      });

      setResults(data.data);
    };

    /* reduce API requests */
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 700);

    /* clean up function to cancel previous timer */
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.geonameid}>
        <div className="content">
          <div className="header">{result.name}</div>
          {result.subcountry}, {result.country}
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
