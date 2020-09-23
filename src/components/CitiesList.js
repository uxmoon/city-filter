import React from "react";

const CitiesList = (props) => {
  const cities = props.cities.map((city) => {
    return <div key={city.geonameid}>{city.name}</div>
  })
  return <div>{cities}</div>;
}

export default CitiesList;
