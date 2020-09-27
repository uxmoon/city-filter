import React from 'react';

const Selection = ({ selected }) => {
  return (
    <React.Fragment>
      <h2 className="ui header">
        <i className="star icon"></i>
        <div className="content">Favorite cities</div>
      </h2>
      <p>
        {selected}
      </p>
    </React.Fragment>
  )
};

export default Selection;
