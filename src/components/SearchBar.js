import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div>
        <form>
          <label>Search city</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
