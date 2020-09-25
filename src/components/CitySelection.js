import React from "react";

const CitySelection = ({ cities }) => {
  const renderedSelection = cities.map((city) => {
    return (
      <div className="item" key={city.geonameid}>
        <i className="marker icon"></i>
        {city.name}({city.subcountry})
      </div>
    );
  });

  return <div className="ui horizontal list">{renderedSelection}</div>;
};

export default CitySelection;
