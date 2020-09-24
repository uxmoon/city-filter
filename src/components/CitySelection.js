import React from "react";

const CitySelection = ({ city }) => {
  if(!city) {
    return <div>City selection</div>
  }

  return <div>{city.name}</div>
}

export default CitySelection;