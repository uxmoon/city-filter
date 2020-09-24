import React from "react";
import CityCard from "./CityCard";

const CitiesList = (props) => {
  const renderedList = props.cities.map((city) => {
    return <CityCard key={city.geonameid} city={city} />
  })
  return <div>{renderedList}</div>;
}

export default CitiesList;
