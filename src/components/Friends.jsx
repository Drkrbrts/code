import React from "react";
import FriendMapping from "./FriendMapping";
import { NavLink } from "react-router-dom";
import {
  getFriend,
  searchFriend,
  deleteFriend,
} from "../services/friendService";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  state = { searchText: { text: "" } };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });

    this.setState(() => {
      let searchText = { ...this.state.searchText };
      searchText[inputName] = newValue;
      console.log(searchText);
      return { searchText };
    });
  };

  componentDidMount = () => {
    getFriend().then(this.onGetFriendSuccess).catch(this.onGetFriendError);
  };

  onGetFriendSuccess = (response) => {
    // console.log(response.data.item.pagedItems);
    var friends = response.data.item.pagedItems;
    this.setState((prevState) => {
      return { mappedFriends: friends.map(this.mapFriend) };
      // return { filteredFriends: mappedFriend.filter(onFilter) };
    });
  };
  onGetFriendError = (response) => {
    console.warn(response);
  };
  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={` something ${oneFriend.id}`}>
        <FriendMapping
          friend={oneFriend}
          onEdit={this.onEditButtonClicked}
          onDelete={this.onDeleteButtonClicked}
        ></FriendMapping>
        ;
      </React.Fragment>
    );
  };
  onFriendButtonClicked = () => {
    this.props.history.push("/friends/update");
  };

  onSearchButtonClicked = () => {
    searchFriend(this.state.searchText.text)
      .then(this.onSearchFriendSuccess)
      .catch(this.onSearchFriendError);
  };
  onSearchFriendSuccess = (response) => {
    console.log(response);
    let friends = response.data.item.pagedItems;
    this.setState((prevState) => {
      return { mappedFriends: friends.map(this.mapFriend) };
    });
  };
  onSearchFriendError = (response) => {
    console.warn(response);
  };

  onEditButtonClicked = (id) => {
    console.log(id);
    this.props.history.push("/friends/update", id);
  };

  onDeleteButtonClicked = (id) => {
    console.log(id);
    deleteFriend(id)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };
  onDeleteFriendSuccess = (response) => {
    console.log(response);
    getFriend().then(this.onGetFriendSuccess).catch(this.onGetFriendError);
  };
  onDeleteFriendError = (response) => {
    console.warn(response);
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <h1 style={{ padding: "5px" }}>Friends</h1>

                <div style={{ padding: "10px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onFriendButtonClicked}
                  >
                    Friends +
                  </button>
                </div>

                <div className="text-end"></div>
              </div>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                  name="text"
                  onChange={this.onFormFieldChanged}
                  value={this.state.searchText.text}
                />
              </form>
              <div style={{ padding: "5px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.onSearchButtonClicked}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="col-md-12 p-5">
          <h1>Friends</h1>
          <hr />
          <div className="row" style={{ padding: "5px" }}>
            {this.state.mappedFriends}
          </div>
          <Pagination></Pagination>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
