import React from "react";

const CityCard = ({ city, onCitySelect }) => {
  return (
    <div onClick={()=> onCitySelect(city)}>
      {city.name}
      <div>
        {city.subcountry}, {city.country}
      </div>
    </div>
  );
};

export default CityCard;
