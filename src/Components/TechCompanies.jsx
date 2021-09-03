import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import SingleModal from "./SingleModal";
import techCoServices from "../services/techCoServices";
import SingleTechCo from "./TechCos/singleTechCo";

class TechCos extends Component {
  state = {
    mappedCos: [],
    totalCos: "",
    searchQuery: "",
    searchEnacted: false,
    isOpen: false,
    coModalInfo: { title: "", content: "" },
  };

  componentDidMount() {
    techCoServices
      .getAll(0, 6)
      .then(this.onGetCosSuccess)
      .catch(this.onGetCosError);
  }

  onGetCosSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedCos = response.data.item.pagedItems.map(this.mapTechCos);
      newState.totalCos = response.data.item.totalCount;
      newState.searchQuery = "";
      newState.searchEnacted = false;

      return newState;
    });
  };
  onGetCosError = (errResponse) => {
    console.log(errResponse);
  };

  mapTechCos = (onTechCo) => {
    return (
      <div
        key={`tcid-${onTechCo.id}`}
        className="col-lg-4 col-md-6 col-sm-12 my-3"
      >
        <SingleTechCo
          techCo={onTechCo}
          toggleModal={this.toggleModal}
          onClick={this.onTechCoClickFull}
          {...this.props}
        ></SingleTechCo>
      </div>
    );
  };

  onTechCoClickFull = (techCo) => {
    // console.log(techCo);
    if (typeof techCo !== "object") {
      let coDeleteSuccsess = this.onCoDeleteSuccess(techCo);
      techCoServices
        .deleteTechCo(techCo)
        .then(coDeleteSuccsess)
        .catch(this.onCoDeleteError);
    } else {
      console.log(techCo);
      this.setState((prevState) => {
        let newModal = { ...prevState.coModalInfo };
        newModal.title = <p className="fw-bold">{techCo.name}</p>;
        newModal.content = (
          <React.Fragment>
            <img
              className="square-card-img center mb-2"
              src={techCo.images[0].imageUrl}
              alt={techCo.images[0].imageTypeId}
            />
            <p>Profile: {techCo.profile}</p>
            <p>Summary: {techCo.summary}</p>
            <p>Headline: {techCo.headline}</p>
            <p>Status: {techCo.statusId}</p>
            <p>Tags: {techCo.urls.map(this.mapUrls).join(", ")}</p>
            <p>Tags: {techCo.tags.map(this.mapTags).join(", ")}</p>
          </React.Fragment>
        );

        return { coModalInfo: newModal };
      });

      this.toggleModal();
    }
  };
  mapUrls = (urls) => {
    return urls.url;
  };
  mapTags = (tags) => {
    return tags.tagName;
  };

  onCoDeleteSuccess = (myId) => {
    this.setState((prevState) => {
      let newTechCoArray = prevState.mappedCos.filter((item) => {
        let result = true;

        if (item.key === `tcid-${myId}`) {
          result = false;
        }

        return result;
      });
      return { mappedCos: newTechCoArray };
    });
  };
  onCoDeleteError = (errResponse) => {
    console.log(errResponse);
  };

  onSearchChanged = (e) => {
    let newValue = e.currentTarget.value;
    this.setState((prevState) => {
      let newSearchQuery = { ...prevState.searchQuery };

      newSearchQuery = newValue;

      return { searchQuery: newSearchQuery };
    });
  };

  onSearchButtonClicked = (e) => {
    e.preventDefault();
    let search = this.state.searchQuery.split(" ").join("%20");
    // console.log(search);
    techCoServices
      .searchTechCos(0, 6, search)
      .then(this.onSearchCoSuccess)
      .catch(this.onSearchCoError);
  };

  onSearchCoSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedCos = response.data.item.pagedItems.map(this.mapTechCos);
      newState.totalCos = response.data.item.totalCount;
      newState.searchEnacted = true;
      return newState;
    });
  };

  onSearchCoError = (errResponse) => {
    console.log(errResponse);
  };

  onClearSearch = (e) => {
    e.preventDefault();
    techCoServices
      .getAll(0, 6)
      .then(this.onGetCosSuccess)
      .catch(this.onGetCosError);
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  onPaginationClick = (current, pageSize) => {
    let start = current - 1;
    console.log(start, pageSize);
    if (this.state.searchEnacted) {
      let search = this.state.searchQuery.split(" ").join("%20");

      techCoServices
        .searchTechCos(start, pageSize, search)
        .then(this.onSearchCoSuccess)
        .catch(this.onSearchCoError);

      return;
    }
    console.log("getAll", this.state.searchEnacted);
    techCoServices
      .getAll(start, pageSize)
      .then(this.onGetCosSuccess)
      .catch(this.onGetCosError);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h3>
              Tech Companies
              <span className="px-3">
                <NavLink to="/techCoForm">
                  <button
                    className=" px-2 btn btn-outline-primary"
                    type="submit"
                  >
                    + TechCos
                  </button>
                </NavLink>
              </span>
            </h3>

            <form className="d-flex">
              <input
                className="form-control me-2"
                // type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onSearchChanged}
                value={this.state.searchQuery}
                onClick={this.onSearchClear}
              />
              {this.state.searchQuery && (
                <button
                  className="btn btn-outline-danger me-2"
                  type="submit"
                  onClick={this.onClearSearch}
                >
                  X
                </button>
              )}

              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={this.onSearchButtonClicked}
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="row my-3">{this.state.mappedCos}</div>
        </div>
        <div className="text-center">
          <Pagination
            pageSize={6}
            total={this.state.totalCos}
            onChange={this.onPaginationClick}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className=" col-md-12 p-5">
              <SingleModal
                {...this.props}
                isOpen={this.state.isOpen}
                toggleModal={this.toggleModal}
                title={this.state.coModalInfo.title}
                content={this.state.coModalInfo.content}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TechCos);
