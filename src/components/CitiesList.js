import React from "react";

const CitiesList = (props) => {
  const cities = props.cities.map((city) => {
    return <div>{city.name}</div>
  })
  return <div>{cities}</div>;
}

export default CitiesList;
