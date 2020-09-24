import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";
import API from "./api.js";
import CitySelection from "./CitySelection";

class App extends React.Component {
  state = { cities: [], selectedCity: [] };

  onSearchSubmit = async (term) => {
    const response = await API.get("/cities", {
      params: {
        filter: term,
      },
    });

    // console.log(response.data.data);
    this.setState({ cities: response.data.data });
  };

  onCitySelect = (city) => {
    // console.log("Selection", city.name)
    this.setState({ selectedCity: this.state.selectedCity.concat(city) });
  };

  render() {
    return (
      <div>
        <CitySelection cities={this.state.selectedCity} />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CitiesList
          cities={this.state.cities}
          onCitySelect={this.onCitySelect}
        />
      </div>
    );
  }
}

export default App;
