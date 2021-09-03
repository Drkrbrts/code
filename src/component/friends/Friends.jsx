import React from "react";
import {
  getFriends,
  deleteFriends,
  searchFriend,
} from "../../services/userService";
import SingleFriend from "./SingleFriend";
import "rc-pagination/assets/index.css";
// import FriendsForm from "./FriendsForm";
import Pagination from "rc-pagination";

class Friends extends React.Component {
  state = {
    mappedFriends: [],
    idToBeDeleted: [],
    totalFriends: "",
    current: 1,
    searchItem: "",
    pageSize: 6,
  };

  onGetFriends = (pageIndex, pageSize) => {
    console.log(pageIndex, pageSize);

    getFriends(pageIndex - 1, pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
    console.log(pageIndex);
  };

  onPaginationClick = (current) => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          current,
        };
      },
      () => this.onGetFriends(this.state.current, this.state.pageSize)
    );
  };

  componentDidMount() {
    this.onGetFriends(this.state.current, this.state.pageSize);

    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // getFriends(0, 1)
    //   .then(this.onGetFriendsSuccess)
    //   .catch(this.onGetFriendsError);

    console.log("componentDidUpdate");
    // if (friendId && prevProps.match.params.id !== friendId) {
    //   console.log("Making an ajax call on componentDidUpdate", { friendId });
  }

  onGetFriendsSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedFriends: response.data.item.pagedItems.map(this.mapFriend),
        totalFriends: response.data.item.totalCount,
        pageSize: response.data.item.pageSize,
        pageIndex: response.data.item.pageIndex,
      };
    });
    console.log(this.state);
  };

  onGetFriendsError = (error) => {
    console.log(error);
  };

  onAddFriendClick = (e) => {
    e.preventDefault();
    this.props.history.push("/friendsform");
  };

  onFriendDelete = (frdToDelete) => {
    // e.preventDefault();
    console.log(frdToDelete);
    let id = frdToDelete.id;

    this.setState((prevState) => {
      return { idToBeDeleted: [...prevState.idToBeDeleted, id] };
    });
    deleteFriends(id)
      .then(this.onFriendDeleteSuccess)
      .catch(this.onFriendDeleteError);
  };

  onFriendDeleteSuccess = (id) => {
    console.log(id);
    // let idToDelete = this.state.idToBeDeleted;
    this.setState((prevState) => {
      const indexOfFriend = prevState.mappedFriends.findIndex(
        (singeArrayFriend) => singeArrayFriend.props.friend.id === id
      );

      const updatedFriends = [...prevState.mappedFriends];

      if (indexOfFriend >= 0) {
        updatedFriends.splice(indexOfFriend, 1);
      }
      return { mappedFriends: updatedFriends };
    });
    console.log(this.state);
  };

  mapFriend = (aFriend) => {
    return (
      <SingleFriend
        key={`Friend # ${aFriend.id}`}
        friend={aFriend}
        onDeleteClick={this.onFriendDelete}
        {...this.props}
      />
    );
  };

  onSearchChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState((prevState) => {
      let searchValue = { ...prevState.q };

      searchValue[name] = value;

      return { searchItem: searchValue };
    });
  };

  onSearchClick = (e) => {
    e.preventDefault();
    console.log(e.target);
    let pageIndex = this.state.pageIndex;
    let pageSize = this.state.pageSize;
    let q = this.state.searchItem.search;
    console.log(q);

    searchFriend(pageIndex, pageSize, q)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedFriends: response.friend.map(this.mapFriend),
      };
    });
  };

  onSearchError = (error) => {
    console.warn(error);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h2>
              Friends
              <span className="px-3">
                <button
                  onClick={this.onAddFriendClick}
                  className="add-button btn btn-outline-primary"
                  type="submit"
                >
                  + Friend
                </button>
              </span>
            </h2>

            <form className="d-flex">
              <input
                onChange={(e) => this.onSearchChange(e)}
                name="search"
                style={{
                  display: "inline-block",
                  width: "250px",
                }}
                type="search"
                className="form-control me-2"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                onClick={this.onSearchClick}
                className="m-1 btn btn-outline-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <hr />
        <div className="container">
          <div className="row my-3">{this.state.mappedFriends}</div>
        </div>
        <div className="text-center">
          {this.state.totalFriends >= 3 ? (
            <Pagination
              onChange={this.onPaginationClick}
              current={this.state.current}
              total={this.state.totalFriends}
              pageSize={this.state.pageSize}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
