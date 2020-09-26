import React from 'react';
import Search from './Search';

export default () => {
  return (
    <div className="ui container">
      <h1 className="ui header">
        <i className="icon map outline"></i>
        <div className="content">Find your favorites cities</div>
      </h1>
      <Search />
    </div>
  );
};
