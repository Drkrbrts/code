import React from "react";
import Friend from "./Friend";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";

import {
  getRecords,
  deleteFriend,
  getFriendQuery,
} from "../services/friendServices";

class Friends extends React.Component {
  state = {
    friends: [],
    paginationControls: {
      totalCount: null,
      totalPages: null,
      pageSize: 4,
      pageIndex: 0,
      currentPage: 1,
    },
    filteredFriends: [],
    searchQuery: "",
  };

  updateSearch = (e) => {
    this.setState({ searchQuery: e.currentTarget.value });
    if (this.state.searchQuery.length === 0) {
      console.log("empty");
      const filteredFriends = [];
      this.setState({ filteredFriends });
    }
  };

  //sot everything works fine, but we gotta move the setfilter to empty insde of
  //component did update for it to render on time

  onSearchButtonClicked = () => {
    getFriendQuery(
      this.state.searchQuery,
      this.state.paginationControls.totalCount
    )
      .then(this.onFriendQuerySuccess)
      .catch(this.onFriendQueryError);
  };

  onFriendQuerySuccess = (response) => {
    console.log("Query response: ", response);
    const filteredFriends = response.data.item.pagedItems;
    this.setState({ filteredFriends });
  };

  onFriendQueryError = (response) => {
    console.log("error: ", response);
  };

  paginationChange = (page) => {
    this.setState((prevState) => {
      const paginationControls = { ...prevState.paginationControls };
      paginationControls.currentPage = page;
      paginationControls.pageIndex = page - 1;
      return { paginationControls };
    });
  };

  addFriendClicked = () => {
    this.props.history.push("/friends/add");
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.paginationControls.pageIndex !==
      this.state.paginationControls.pageIndex
    ) {
      getRecords(
        this.state.paginationControls.pageIndex,
        this.state.paginationControls.pageSize
      )
        .then(this.onGetRecordsSuccess)
        .catch(this.onGetRecordsError);
    }
  }

  componentDidMount() {
    getRecords(
      this.state.paginationControls.pageIndex,
      this.state.paginationControls.pageSize
    )
      .then(this.onGetRecordsSuccess)
      .catch(this.onGetRecordsError);
  }

  onGetRecordsSuccess = (response) => {
    // const friends = response.data.item.pagedItems;
    this.setState((prevState) => {
      const friends = response.data.item.pagedItems;
      const paginationControls = { ...prevState.paginationControls };
      paginationControls.totalCount = response.data.item.totalCount;
      paginationControls.totalPages = response.data.item.totalPages;

      return { friends, paginationControls };
    });

    // this.setState({ friends });
  };

  onGetRecordsError = (response) => {
    console.log(response);
  };

  onDeleteButtonClicked = (buttonId) => {
    const friends = this.state.friends.filter(
      (friend) => friend.id !== buttonId
    );
    this.setState({ friends });
    deleteFriend(buttonId)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (response) => {
    console.log("delete friend success", response);
  };

  onDeleteFriendError = (response) => {
    console.log("deletefriend error", response);
  };

  onEditButtonClicked = (friendId) => {
    const filteredFriend = this.state.friends.filter(
      (friend) => friend.id === friendId
    );

    console.log("nljj: ", filteredFriend);

    this.props.history.push(`/friends/${friendId}`, filteredFriend);
  };

  mapFriend = (oneFriend) => {
    return (
      <Friend
        key={oneFriend.id}
        id={oneFriend.id}
        title={oneFriend.title}
        summary={oneFriend.summary}
        imageUrl={oneFriend.primaryImage.imageUrl}
        delete={this.onDeleteButtonClicked}
        edit={this.onEditButtonClicked}
      />
    );
  };

  render() {
    const { filteredFriends, paginationControls, friends } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-2">
            <div className="col">
              <button onClick={this.addFriendClicked} className="btn btn-dark">
                + Friend
              </button>
            </div>
            <div className="col-md-3 me-1">
              <input
                onChange={this.updateSearch}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-md-1">
              <button
                onClick={this.onSearchButtonClicked}
                className="btn btn-light"
              >
                Search
              </button>
            </div>
          </div>
          <div className="container-fluid mt-5 shadow">
            <div className="card-group">
              <div className="row">
                {filteredFriends.length > 0
                  ? filteredFriends.map(this.mapFriend)
                  : friends.map(this.mapFriend)}

                {/* {this.state.mappedFriends} */}
              </div>
              <div className="m-3">
                <Pagination
                  onChange={this.paginationChange}
                  current={paginationControls.currentPage}
                  total={paginationControls.totalCount} //update from axios first
                  pageSize={paginationControls.pageSize}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
