import './App.css';
import React, { useState } from 'react';
import Search from './Search';
import Selection from './Selection';
import Preferences from './Preferences';
import List from './List';

export default () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="ui main container">
      <div className="ui stackable grid">
        <div className="ten wide column">
          <h1 className="ui header">
            <i className="icon map outline"></i>
            <div className="content">Find your favorites cities</div>
          </h1>
          <Search selected={selected} onSelectedChange={setSelected} />
        </div>
        <div className="six wide column">
          <Selection selected={selected} />
        </div>
      </div>
    </div>
  );
};
