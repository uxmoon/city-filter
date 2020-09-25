import React from "react";

const CityCard = ({ city, onCitySelect }) => {
  return (
    <div className="item" onClick={() => onCitySelect(city)}>
      <i className="large marker middle aligned icon"></i>
      <div className="content">
        <div className="header">{city.name}</div>
        {city.subcountry}, {city.country}
      </div>
    </div>
  );
};

export default CityCard;
