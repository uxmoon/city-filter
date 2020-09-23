import React from "react";

class SearchBar extends React.Component {

  onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <label>Search city</label>
          <input type="text" onChange={this.onInputChange} />
        </form>
      </div>
    )
  }
}

export default SearchBar;