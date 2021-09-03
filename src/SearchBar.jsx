import React from "react";
import * as friendsService from "./services/friendsService";

class Search extends React.Component {
  state = { search: "" };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let input = currentTarget.name;

    this.setState(() => {
      let newState = {};

      newState[input] = newValue;

      console.log(newState);

      return newState;
    });
  };

  onSearchClicked = () => {
    console.log("search clicked");

    let pgIndex = this.props.pageIndex;
    let pgSize = this.props.pageSize;
    let query = this.state.search;

    // console.log(pgIndex, pgSize, query);

    friendsService
      .search(pgIndex, pgSize, query)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log(response, "onSearchSuccess");

    friendsService
      .getById(response.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  };

  onSearchError = (error) => {
    console.log(error, "onSearchError");
  };

  onGetByIdSuccess = (response) => {
    console.log(response, "onGetByIdError");
  };

  onGetByIdError = (error) => {
    console.log(error, "onGetByIdError");
  };

  render() {
    return (
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          style={{
            width: "15%",
            height: "40px",
            position: "absolute",
            right: "140px",
            top: "105px",
            borderRadius: "10px",
          }}
          name="search"
          onChange={this.onFormFieldChange}
          value={this.state.search}
        />

        <button
          className="btn btn-primary"
          type="button"
          style={{
            height: "40px",
            width: "100px",
            position: "absolute",
            right: "30px",
            top: "105px",
            borderRadius: "10px",
          }}
          onClick={this.onSearchClicked}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
