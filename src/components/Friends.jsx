import React from "react";
import { withRouter } from "react-router-dom";
import friendService from "../services/friendService";
import "./compStyle.css";
import SingleFriend from "./SingleFriend";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/es/locale/en_US";
import "rc-pagination/assets/index.css";
import debug from "sabio-debug";
const _logger = debug.extend("App");

class Friends extends React.Component {
  state = {
    mappedFriends: [],
    activeSearch: false,
    formData: { friendSearch: "" },
    currentPage: 1,
    pageSize: 3,
    totalCountOfFriends: 0,
    searchQuery: "",
  };

  componentDidMount() {
    friendService
      .getByPagination(this.state.currentPage, this.state.pageSize)
      .then(this.onPaginationSuccess)
      .catch(this.onError);
  }

  onPagChange = (currentPage, size) => {
    this.setState(
      (prevState) => {
        return { ...prevState, currentPage };
      },
      () => {
        this.state.activeSearch
          ? friendService
              .getByPaginatedSearch(currentPage, size, this.state.searchQuery)
              .then(this.onPaginationSuccess)
              .catch(this.onError)
          : friendService
              .getByPagination(currentPage, size)
              .then(this.onPaginationSuccess)
              .catch(this.onError);
      }
    );
  };

  onPaginationSuccess = (response) => {
    let { item } = response.data;

    this.setState((prevState) => {
      let mappedFriends = [...prevState.mappedFriends];
      let currentFriends = item.pagedItems;
      let totalCountOfFriends = { ...prevState.totalCountOfFriends };
      totalCountOfFriends = item.totalCount;
      mappedFriends = currentFriends.map(this.mapFriend);
      return { mappedFriends, totalCountOfFriends };
    });
  };

  onError = (err) => {
    console.error(err);
    toast.warn(`${err}`);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = NewValue;
      return { formData };
    });
  };

  onSearchClick = () => {
    let currentFormData = this.state.formData.friendSearch;
    let splitFormData = currentFormData.split(" ");
    let finalStringForm = splitFormData.join("%20");
    friendService
      .getByPaginatedSearch(
        this.state.currentPage,
        this.state.pageSize,
        finalStringForm
      )
      .then(this.onPaginationSuccess)
      .catch(this.onError);

    this.setState((prevState) => {
      let activeSearch = { ...prevState.activeSearch };
      let searchQuery = { ...prevState.searchQuery };
      let currentPage = { ...prevState.currentPage };
      activeSearch = true;
      searchQuery = finalStringForm;
      currentPage = 1;
      return { activeSearch, searchQuery, currentPage };
    });
  };

  onCancelSearchClick = () => {
    friendService
      .getByPagination(this.state.currentPage, this.state.pageSize)
      .then(this.onCancelSearchGetAllSuccess)
      .catch(this.onError);
  };

  onCancelSearchGetAllSuccess = (response) => {
    let { item } = response.data;
    this.setState((prevState) => {
      let mappedFriends = { ...prevState.mappedFriends };
      let activeSearch = { ...prevState.activeSearch };
      let totalCountOfFriends = { ...prevState.totalCountOfFriends };
      let formData = { ...prevState.formData };
      let currentFriends = item.pagedItems;
      mappedFriends = currentFriends.map(this.mapFriend);
      totalCountOfFriends = item.totalCount;
      activeSearch = false;
      formData.friendSearch = "";
      return {
        currentFriends,
        mappedFriends,
        totalCountOfFriends,
        activeSearch,
        formData,
      };
    });
  };

  onAddFriendClick = () => {
    this.props.history.push("/friendform");
  };

  onDeleteClick = (e) => {
    friendService
      .deleteById(e.id)
      .then(this.onDeleteByIdSucess)
      .catch(this.onError);
  };

  onDeleteByIdSucess = (id) => {
    this.setState((prevState) => {
      const indexOfFriend = prevState.mappedFriends.findIndex(
        (singleMappedFriend) => singleMappedFriend.key === `friend_${id}`
      );

      _logger(indexOfFriend);

      const updatedFriend = [...prevState.mappedFriends];

      if (indexOfFriend >= 0) {
        updatedFriend.splice(indexOfFriend, 1);
      }

      return { mappedFriends: updatedFriend };
    }, this.stateChanged);
    toast.success("Friend Successfully Deleted");
  };

  mapFriend = (oneFriend) => {
    return (
      <SingleFriend
        key={`friend_${oneFriend.id}`}
        friend={oneFriend}
        onClick={this.onDeleteClick}
        {...this.props}
      ></SingleFriend>
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Friends
            </strong>
            <button
              className="btn btn-outline-light me-auto"
              onClick={this.onAddFriendClick}
            >
              +Friend
            </button>
            <form className="d-flex">
              <input
                type="text"
                className="form-control mx-2"
                id="friendSearch"
                name="friendSearch"
                placeholder="Search"
                onChange={this.onFormFieldChange}
                value={this.state.formData.friendSearch}
              />
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={this.onSearchClick}
              >
                Search
              </button>
              {this.state.activeSearch ? (
                <button
                  type="button"
                  className="btn btn-outline-danger mx-2"
                  onClick={this.onCancelSearchClick}
                >
                  Cancel
                </button>
              ) : null}
            </form>
          </div>
        </nav>
        <div className="col-md-12 p-5">
          <Pagination
            current={this.state.currentPage}
            pageSize={this.state.pageSize}
            total={this.state.totalCountOfFriends}
            onChange={this.onPagChange}
            locale={localeInfo}
          />
          <div className="row">{this.state.mappedFriends}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Friends);
