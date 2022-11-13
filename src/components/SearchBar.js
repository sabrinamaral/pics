import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            className="filed"
            type="text"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
