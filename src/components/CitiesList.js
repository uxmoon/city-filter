import React from "react";
import axios from "axios";

class CitiesList extends React.Component {
  state = { cities: [] };

  componentDidMount() {
    axios.get("http://localhost:3030/cities")
    .then(response => {
      console.log(response);
    });
  }

  render() {
    return <div>Cities list</div>;
  }
}

export default CitiesList;
