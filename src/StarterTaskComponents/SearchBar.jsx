import React from "react";
import * as friendsService from "../services/friendsService";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class SearchBar extends React.Component {
  state = { search: "" };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let input = currentTarget.name;

    this.setState(() => {
      let newState = {};

      newState[input] = newValue;

      // console.log(newState);

      return newState;
    });
  };

  onGetSuccess = (response) => {
    console.log(response, "onGetSuccess");
  };

  onGetError = (error) => {
    console.log(error, "onGetError");
  };

  onSearchClicked = () => {
    console.log("search clicked");

    let pgIndex = this.props.pageIndex;
    let pgSize = this.props.pageSize;
    let query = this.state.search;

    console.log(this.props, query);

    friendsService
      .search(pgIndex, pgSize, query)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log(response, "onSearchSuccess");

    this.props.onSuccessSearch(response);
  };

  onSearchError = (error) => {
    console.log(error, "onSearchError");
    toast.error(
      `Sorry! We cannot locate any friend by search term "${this.state.search}"`
    );
  };

  render() {
    return (
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Search Friends"
          style={{
            width: "10%",
            height: "50px",
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
          className="btn"
          type="button"
          style={{
            height: "50px",
            width: "100px",
            position: "absolute",
            right: "30px",
            top: "105px",
            borderRadius: "10px",
            backgroundColor: "rgb(131, 104, 143)",
            color: "white",
          }}
          onClick={this.onSearchClicked}
        >
          Search
        </button>
      </div>
    );
  }
}

export default withRouter(SearchBar);
