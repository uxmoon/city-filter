import React from "react";
import CityCard from "./CityCard";

const CitiesList = (props) => {
  const cities = props.cities.map((city) => {
    return <CityCard key={city.geonameid} city={city} />
  })
  return <div>{cities}</div>;
}

export default CitiesList;
