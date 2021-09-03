import React, { Component } from "react";
import * as friendService from "./services/friendService";
import SingleFriend from "./SingleFriend";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import { toast, ToastContainer } from "react-toastify";

class Friends extends Component {
  state = {
    friendInfo: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
    searchQuery: "",
    pageIndex: 0,
    pageSize: 5,
    total: 0,
  };

  componentDidMount() {
    friendService
      .getPage(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  }

  mapFriend = (oneFriend) => (
    <SingleFriend
      friend={oneFriend}
      key={oneFriend.id}
      handleDelete={this.handleDelete}
      handleEdit={this.handleEdit}
    />
  );

  handleDelete = (id) => {
    console.log(id);

    friendService
      .remove(id)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  handleEdit = (oneFriend) => {
    this.props.history.push(`friends/${oneFriend.id}/edit`, oneFriend);
  };

  onAddFriendClick = () => {
    this.props.history.push("friends/new");
  };

  //SEARCH BAR

  handleOnInputChange = (e) => {
    let target = e.currentTarget;
    let newValue = target.value;

    this.setState(
      (prevState) => {
        let searchQuery = { ...this.state.searchQuery };
        searchQuery = newValue;
        return { ...prevState, searchQuery };
      },
      () => {
        if (this.state.searchQuery) {
          friendService
            .search(
              this.state.pageIndex,
              this.state.pageSize,
              this.state.searchQuery
            )
            .then(this.onGetAllFriendsSuccess)
            .catch(this.onGetAllFriendsError);
        } else {
          friendService
            .getPage(this.state.pageIndex, this.state.pageSize)
            .then(this.onGetAllFriendsSuccess)
            .catch(this.onGetAllFriendsError);
        }
      }
    );
  };

  //PAGINATION

  onPageChange = (currentPage) => {
    console.log(currentPage);

    this.setState((prevState) => {
      let index = currentPage - 1;
      if (this.state.searchQuery) {
        friendService
          .search(index, this.state.pageSize, this.state.searchQuery)
          .then(this.onGetAllFriendsSuccess)
          .catch(this.onGetAllFriendsError);
      } else {
        friendService
          .getPage(index, this.state.pageSize)
          .then(this.onGetAllFriendsSuccess)
          .catch(this.onGetAllFriendsError);
      }
      return { ...prevState, pageIndex: index };
    });
  };

  //----------SUCCESS & ERROR

  onGetAllFriendsSuccess = (res) => {
    console.log(res);
    let myFriends = res.data.item.pagedItems;
    console.log(myFriends);

    this.setState((prevState) => {
      return {
        ...prevState,
        total: res.data.item.totalCount,
        mappedFriends: myFriends.map(this.mapFriend),
      };
    });
  };

  onGetAllFriendsError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onDeleteFriendSuccess = (res) => {
    console.log(res);

    this.setState((prevState) => {
      let friends = [...prevState.mappedFriends];
      let deletedFriendIdx = friends.findIndex((friend) => friend.key === res);
      console.log(deletedFriendIdx, friends);

      friends.splice(deletedFriendIdx, 1);
      return { ...prevState, mappedFriends: friends };
    });
    toast.success("You didn't need that friend anyways! :)");
  };

  onDeleteFriendError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  //-----------------------------
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="col-md-12 p-5 text-center">
          <h1>Friends</h1>
          <button className="btn btn-primary" onClick={this.onAddFriendClick}>
            Add A Friend
          </button>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={this.state.searchQuery}
              name="searchQuery"
              placeholder="Search.."
              aria-label="Search"
              onChange={this.handleOnInputChange}
            />
          </form>
          <hr />
          <div className="row">{this.state.mappedFriends}</div>
          <Pagination
            pageSize={this.state.pageSize}
            onChange={this.onPageChange}
            current={this.state.pageIndex + 1}
            total={this.state.total}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
