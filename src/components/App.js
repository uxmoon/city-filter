import "./App.css";
import React, { useState } from 'react';
import Search from './Search';
import Selection from './Selection';

export default () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="ui main container">
      <h1 className="ui header">
        <i className="icon map outline"></i>
        <div className="content">Find your favorites cities</div>
      </h1>
      <Search selected={selected} onSelectedChange={setSelected} />
      <hr />
      <h3>Selection</h3>
      <Selection selected={selected} />
    </div>
  );
};
