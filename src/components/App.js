import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";
import API from "./api.js"

class App extends React.Component {

  state = { cities: [], selectedCity: null }

  onSearchSubmit = async (term) => {
    const response = await API.get("/cities", {
      params: {
        filter: term
      }
    });

    // console.log(response.data.data);
    this.setState({ cities: response.data.data })
  }

  onCitySelect = (city) => {
    console.log("Selection", city)
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CitiesList cities={this.state.cities} onCitySelect={this.onCitySelect} />
      </div>
    );
  }
}

export default App;
