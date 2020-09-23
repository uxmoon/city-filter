import React from "react";
import axios from "axios";

class CitiesList extends React.Component {
  state = { cities: [] };

  componentDidMount() {
    axios.get("http://localhost:3030/cities")
    .then((response) => {
      // console.log(response.data);
      console.log(response.data.data);
      this.setState({ cities: response.data.data })
    });
  }

  render() {
    return (
      <div>
        Cities list: {this.state.cities.map((city) => <div key={city.geonameid}>{city.name}</div> )}
      </div>
    )
  }
}

export default CitiesList;
