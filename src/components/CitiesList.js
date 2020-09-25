import React from "react";
import CityCard from "./CityCard";

const CitiesList = ({ cities, onCitySelect }) => {
  const renderedList = cities.map((city) => {
    return (
      <CityCard onCitySelect={onCitySelect} key={city.geonameid} city={city} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default CitiesList;
