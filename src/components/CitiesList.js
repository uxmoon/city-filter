import React from "react";

class CitiesList extends React.Component {
  state = { cities: [] };

  render() {
    return (
      <div>
        Cities list: {this.state.cities.map((city) => <div key={city.geonameid}>{city.name}</div> )}
      </div>
    )
  }
}

export default CitiesList;
