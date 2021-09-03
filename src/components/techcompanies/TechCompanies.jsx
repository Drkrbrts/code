import React from "react";
import * as techService from "../auth/techService";
import SingleCompany from "./SingleCompany";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class TechCompanies extends React.Component {
  state = {
    techCoLength: 0,
    mappedTechArray: [],
    current: 1,
  };

  componentDidMount() {
    console.log("Component Mounted");
    if (this.props.isLoggedIn === false) {
      this.props.history.push("/login");
    }
    techService
      .getCompanies(0, 4)
      .then(this.onGetCoSuccess)
      .catch(this.onGetCoError);
  }

  onEditClick = (id) => {
    console.log("Edit was clicked");
    this.props.history.push(`/addcompany/${id}/edit`);
  };

  onGetCoSuccess = (response) => {
    console.log(response);
    let mappedTechArray = response.data.item.pagedItems.map(this.mapCo);
    this.setState((prevState) => {
      var mappedArray = { ...prevState.mappedTechArray };
      var length = { ...prevState.techCoLength };
      mappedArray = mappedTechArray;
      length = response.data.item.totalCount;
      return { mappedTechArray: mappedArray, techCoLength: length };
    }, this.stateChanged);
  };

  stateChanged = () => {
    console.log("State Changed", this.state);
  };

  onGetCoError = (err) => {
    console.log({ error: err });
  };

  mapCo = (co) => {
    return (
      <React.Fragment key={`co-${co.id}`}>
        <SingleCompany company={co} Edit={this.onEditClick} />
      </React.Fragment>
    );
  };

  onAddCompanyClick = () => {
    this.props.history.push("/addcompany");
  };

  onPageChange = (page) => {
    this.setState((prevState) => {
      var newPage = { ...prevState.current };
      newPage = page;
      return { current: newPage };
    }, this.stateChanged);
    techService
      .getCompanies(page - 1, 4)
      .then(this.onGetCoSuccess)
      .catch(this.onGetCoError);
  };

  render() {
    return (
      <div className="container">
        <h1>Companies</h1>
        <button
          className="btn btn-primary my-3"
          onClick={this.onAddCompanyClick}
        >
          Add Company
        </button>
        <div className="row">{this.state.mappedTechArray}</div>
        <Pagination
          className="my-4"
          onChange={this.onPageChange}
          current={this.state.current}
          total={this.state.techCoLength * 2.5}
        />
      </div>
    );
  }
}

export default React.memo(TechCompanies);
