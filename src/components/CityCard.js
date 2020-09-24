import React from "react";

const CityCard = ({ city }) => {
  return (
    <div>
      {city.name}
      <div>
        {city.subcountry}, {city.country}
      </div>
    </div>
  );
};

export default CityCard;
