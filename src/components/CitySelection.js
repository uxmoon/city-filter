import React from "react";

const CitySelection = ({ cities }) => {
  const renderedSelection = cities.map((city) => {
    return <div key={city.geonameid}>{city.name}</div>;
  });

  return <div>{renderedSelection}</div>;
};

export default CitySelection;
