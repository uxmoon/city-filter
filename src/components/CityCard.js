import React from "react";

class CityCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.city.name}
        <div>
        {this.props.city.subcountry}, {this.props.city.country}
        </div>
      </div>
    )
  }
}

export default CityCard;