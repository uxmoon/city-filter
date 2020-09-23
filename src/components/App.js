import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  componentDidMount() {
    axios.get("http://localhost:3030/cities", {
      params: { limit: 10, filter: "buenos" }
    })
    .then((response) => {
      // console.log(response);
      this.setState({ cities: response.data.data })
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CitiesList />
      </div>
    );
  }
}

export default App;
