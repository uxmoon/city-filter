import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";

class App extends React.Component {

  state = { cities: [] }

  onSearchSubmit = async (term) => {
    const response = await axios.get("http://localhost:3030/cities", {
      params: { limit: 100, filter: term }
    });

    console.log(response.data.data);
    this.setState({ cities: response.data.data })
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.cities.length} cities.
      </div>
    );
  }
}

export default App;
