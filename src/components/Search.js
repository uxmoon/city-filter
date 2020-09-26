import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ selected, onSelectedChange }) => {
  /* init state */
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  /* API request using useEffect */
  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get('http://localhost:3030/cities', {
          params: {
            offset: 0,
            limit: 10,
            filter: term,
          },
        });

        if (response.data.data.length > 0) {
          setResults(response.data.data);
          setErrorMessage(null);
        } else {
          setResults([]);
          setErrorMessage('No cities were found');
        }
      } catch (error) {
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setResults([]);
          setErrorMessage(
            `${error.response.data.message}. Please reload the page and try again.`
          );
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
      }
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

  /* Results list */
  const renderedResults = results.map((result) => {
    return (
      <div
        className="item"
        key={result.geonameid}
        onClick={() => onSelectedChange(result.name)}
      >
        <i className="map marker icon"></i>
        <div className="content">
          <div className="header">{result.name}</div>
          {result.subcountry}, {result.country}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        Selected: {selected}
      </div>
      <div className="ui form">
        <div className="field">
          <div className="ui large icon input">
            <input
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              className="input"
              placeholder="Enter a city name"
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui selection celled list">{renderedResults}</div>
      {errorMessage}
    </div>
  );
};

export default Search;
