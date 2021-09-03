import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import friendsServices from "../services/friendsServices";
import SingleFriend from "./SingleFriend";

class Friends extends Component {
  state = {
    mappedFriends: [],
    totalFriends: "",
    searchQuery: "",
    searchEnacted: false,
  };

  componentDidMount() {
    friendsServices
      .getAll(0, 6)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  }

  mapFriends = (oneFriend) => {
    return (
      <div
        key={`fd-${oneFriend.id}`}
        className="col-lg-4 col-md-6 col-sm-12 my-3"
      >
        <SingleFriend
          friend={oneFriend}
          onClick={this.onFriendClickFull}
          {...this.props}
        ></SingleFriend>
      </div>
    );
  };

  onGetFriendsSuccess = (response) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedFriends = response.data.item.pagedItems.map(
        this.mapFriends
      );
      newState.totalFriends = response.data.item.totalCount;
      newState.searchQuery = "";
      newState.searchEnacted = false;
      return newState;
    });
    console.log(response);
  };

  onGetFriendsError = (errResponse) => {
    console.log(errResponse);
  };

  onDeleteFriendSuccess = (myId) => {
    this.setState((prevState) => {
      let newFriendArray = prevState.mappedFriends.filter((item) => {
        let result = true;

        if (item.key === `fd-${myId}`) {
          result = false;
        }

        return result;
      });
      return { mappedFriends: newFriendArray };
    });
  };

  onDeleteFriendError = (errResponse) => {
    console.log(errResponse);
  };

  onFriendClickFull = (friend) => {
    console.log(friend);
    let ajaxSuccsess = this.onDeleteFriendSuccess(friend.id);

    friendsServices
      .deleteFriend(friend.id)
      .then(ajaxSuccsess)
      .catch(this.onDeleteFriendError);
  };

  onSearchChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;

    this.setState((prevState) => {
      let newSearchQuery = { ...prevState.searchQuery };

      newSearchQuery = newValue;

      return { searchQuery: newSearchQuery };
    });
  };

  onSearchButtonClicked = (e) => {
    e.preventDefault();

    let search = this.state.searchQuery.split(" ").join("%20");

    friendsServices
      .searchFriends(0, 6, search)
      .then(this.onSearchFriendSuccess)
      .catch(this.onSearchFriendError);
  };

  onSearchFriendSuccess = (response) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedFriends = response.data.item.pagedItems.map(
        this.mapFriends
      );
      newState.totalFriends = response.data.item.totalCount;
      newState.searchEnacted = true;
      return newState;
    });
    console.log(response);
  };

  onSearchFriendError = (errResponse) => {
    console.log(errResponse);
  };

  onPaginationClick = (current, pageSize) => {
    let start = current - 1;
    if (this.state.searchEnacted) {
      let search = this.state.searchQuery.split(" ").join("%20");
      console.log("search", this.state.searchEnacted);
      friendsServices
        .searchFriends(start, pageSize, search)
        .then(this.onSearchFriendSuccess)
        .catch(this.onSearchFriendError);
      return;
    }
    console.log("getAll", this.state.searchEnacted);
    friendsServices
      .getAll(start, pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  onClearSearch = (e) => {
    e.preventDefault();
    friendsServices
      .getAll(0, 6)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h3>
              Friends
              <span className="px-3">
                <NavLink to="/friendsForm">
                  <button
                    className=" px-2 btn btn-outline-primary"
                    type="submit"
                  >
                    + Friends
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
          <div className="row my-3">{this.state.mappedFriends}</div>
        </div>
        <div className="text-center">
          <Pagination
            pageSize={6}
            total={this.state.totalFriends}
            onChange={this.onPaginationClick}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Friends);
