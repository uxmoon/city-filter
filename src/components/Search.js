import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ selected, onSelectedChange }) => {
  /* init state */
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('info');

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
          setVisible(false);
        } else {
          setResults([]);
          setErrorMessage('No cities were found. Try again with another search.');
          setVisible(true);
          setStatus('info');
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
            `${error.response.data.message} Please reload the page and try again.`
          );
          setVisible(true);
          setStatus('error');
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
      {/* Display city selection */}
      <div>Selected: {selected}</div>

      {/* Display input search */}
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

      {/* Display Results list */}
      <div className="ui selection celled list">{renderedResults}</div>

      {/* Display errorMessage */}
      <div className={`ui message ${visible ? 'visible' : 'hidden'} ${status}`}>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Search;
