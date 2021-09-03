import React, { Component } from "react";
import { toast } from "react-toastify";
import * as friendService from "../services/friendService";
import "./../StarterProjectAll.css";
import SingleFriend from "./SingleFriend";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class FriendsPage extends Component {
  state = {
    current: 1,
    search: {
      searchBar: "",
    },
  };

  componentDidMount() {
    friendService
      .allFriends()
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  }
  mapFriends = (friend) => {
    return (
      <React.Fragment key={friend.id}>
        <SingleFriend
          friend={friend}
          onEditClicked={this.onEditClickFull}
          onDeleteRequested={this.onDeleteRequested}
        ></SingleFriend>
      </React.Fragment>
    );
  };
  onGetAllFriendsSuccess = (friends) => {
    var friendsArr = friends.data.item.pagedItems;

    this.setState((prevState) => {
      return {
        mappedFriends: friendsArr.map(this.mapFrreiends),
      };
    });
  };
  onGetAllFriendsError = (err) => {
    console.error(err);
  };
  onEditClickFull = (friendId) => {
    this.props.history.push(`addOrEditFriends/${friendId}`);
  };
  onDeleteRequested = (friendId) => {
    friendService
      .deleteFriend(friendId)
      .then(this.onDeleteSelectedSuccess)
      .catch(this.onDeleteSelectedError);
  };
  onDeleteSelectedSuccess = (response) => {
    toast.success("Succesfully deleted");

    this.setState((prevState) => {
      console.log("prevState", prevState.mappedFriends);

      const indexOfPerson = prevState.mappedFriends.findIndex(
        (singleFriend) => parseInt(singleFriend.key) === response
      );
      console.log("index", indexOfPerson);
      const updatedFriends = [...prevState.mappedFriends];
      console.log("updated", updatedFriends);

      if (indexOfPerson >= 0) {
        updatedFriends.splice(indexOfPerson, 1);
      }
      return {
        mappedFriends: updatedFriends,
      };
    });
  };
  onDeleteSelectedError = (err) => {
    toast.success(`There seems to be an error, ${err}`);
  };
  onAddFriendClicked = () => {
    console.log("add new friend");
    this.props.history.push(`addOrEditFriends/add`);
  };
  searchBarData = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let search = { ...this.state.search };
      search[inputName] = newValue;
      return { search };
    });
  };
  searchFriends = () => {
    let searchFriendsData = this.state.search.searchBar;
    friendService
      .searchFriends(searchFriendsData)
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onSearchFriendError);
  };
  onSearchFriendError = (response) => {
    console.error(response);
    toast.error("No matches for your search. Please try again");
  };
  showAllFriends = () => {
    friendService
      .allFriends()
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  };

  onChangePage = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="jumbotron-heading">My Friends</h1>
              <p className="lead text-muted">Create or search for friends.</p>
              <div>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search Friends"
                    aria-label="Search"
                    name="searchBar"
                    value={this.state.search.searchBar}
                    onChange={this.searchBarData}
                  />
                  <button
                    id="searchFriendsBtn"
                    className="btn btn-outline-dark"
                    type="button"
                    onClick={this.searchFriends}
                  >
                    Search
                  </button>
                </form>
                <div className="mt-2">
                  <button
                    type="button"
                    className="btn btn-dark me-2"
                    onClick={this.onAddFriendClicked}
                  >
                    Add a friend
                  </button>

                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.showAllFriends}
                  >
                    Show All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-dark">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 friendContainer">
              {this.state.mappedFriends}
              <Pagination
                style={{ marginLeft: "auto" }}
                className="mt-3"
                onChange={this.onChangePage}
                current={this.state.current}
                pageSize={3}
                total={6}
                hideOnSinglePage={true}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsPage;
