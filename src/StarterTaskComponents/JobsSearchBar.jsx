import React from "react";
import { toast } from "react-toastify";
import { search } from "../services/jobsService";
import SingleJob from "./SingleJob";

class JobsSearch extends React.Component {
  state = {
    search: "",
  };

  componentDidMount() {
    this.setState((prevState) => {
      let newState = { ...prevState };

      newState.pageIndex = this.props.pageIndex;
      newState.pageSize = this.props.pageSize;

      console.log(newState, "componentDidMount");
      return newState;
    });
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let input = currentTarget.name;
    console.log(input);

    this.setState((prevstate) => {
      let newState = {};

      newState[input] = newValue;
      console.log(newState);
      return newState;
    });
  };

  onSearchClicked = () => {
    console.log(this.state);

    let state = this.state;

    search(state.pageIndex, state.pageSize, state.search)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  searchJob = (job) => {
    return <SingleJob job={job}></SingleJob>;
  };

  onSearchSuccess = (response) => {
    console.log(response, "onSearchSuccess");

    this.props.onSuccessSearch(response);
  };

  onSearchError = (error) => {
    console.log(error, "onSearchError");

    toast.error(
      `Unfortunately we are unable to locate any jobs containing search term "${this.state.search}" at this moment`
    );
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
          className="btn"
          type="button"
          style={{
            height: "40px",
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
        <div>{this.state.searchedJobs}</div>
      </div>
    );
  }
}

export default JobsSearch;
