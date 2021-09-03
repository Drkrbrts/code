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
    friend: [],
    current: 1,
    searchItem: "",
    total: 0,
  };

  onChange = (page, pageSize) => {
    console.log(page, pageSize);
    this.setState({ current: page-- });

    getFriends(page, pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
    console.log(page);
  };

  onSearchChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState((prevState) => {
      let searchValue = { ...prevState.q };

      searchValue[name] = value;

      return { searchItem: searchValue };
    }, this.stateChanged);
  };

  componentDidMount() {
    getFriends(0, 3)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);

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
    this.setState(() => {
      return {
        mappedFriends: response.data.item.pagedItems.map(this.mapFriend),
        total: response.data.item.totalCount,
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

  onFriendDelete = (frd) => {
    // e.preventDefault();
    console.log(frd);
    let id = frd.id;
    deleteFriends(id)
      .then(this.onFriendDeleteSuccess)
      .catch(this.onFriendDeleteError);
  };

  onFriendDeleteSuccess = (response) => {
    console.log(response);
  };

  onFriendDeleteError = (error) => {
    console.log(error);
  };

  onFriendEdit = (frd) => {
    console.log(frd);
    let id = frd.id;

    this.props.history.push("/friends/" + id + "/edit");
  };

  onEditFriendSuccess = (response) => {
    console.log(response);
  };

  onEditFriendError = (error) => {
    console.log(error);
  };

  mapFriend = (aFriend) => {
    return (
      <SingleFriend
        key={`Friend # ${aFriend.id}`}
        friend={aFriend}
        onDeleteClick={this.onFriendDelete}
        onEditClick={this.onFriendEdit}
      ></SingleFriend>
    );
  };

  onSearchClick = (e) => {
    e.preventDefault();
    console.log(e.target);
    let pageIndex = 0;
    let pageSize = 3;
    let q = this.state.searchItem.search;
    console.log(q);
    searchFriend(pageIndex, pageSize, q)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return { mappedFriends: response.friend.map(this.mapFriend) };
    });
  };

  onSearchError = (error) => {
    console.warn(error);
  };

  render() {
    return (
      <React.Fragment>
        <div className="p-2 bg-light rounded-3 mb-4">
          <div className="container">
            <h2>Friends</h2>
            <button
              onClick={this.onAddFriendClick}
              className="btn btn-primary btn-md"
            >
              + Friend
            </button>
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <form>
                <input
                  onChange={(e) => this.onSearchChange(e)}
                  name="search"
                  style={{
                    display: "inline-block",
                    width: "250px",
                  }}
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button
                  onClick={this.onSearchClick}
                  className="m-1"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <hr />

            {/* <h3 className="display-7 fw-bold">Friends</h3>
            <button className="btn btn-primary btn-md">+ Friend</button>
            <div>
              <form action="/" method="get">
                <label htmlFor="header-search">
                  <span className="visually-hidden">Search Friends</span>
                </label>
                <input
                  type="text"
                  id="header-search"
                  placeholder="Search Friends"
                  name="s"
                />
                <button className="m-1" type="submit">
                  Search
                </button>
              </form>
            </div> */}
            <div className="col-md-18 p-2">
              <div className="row">{this.state.mappedFriends}</div>
              <div className="m-2 p-2">
                {!this.state.searchItem ? (
                  <Pagination
                    onChange={this.onChange}
                    current={this.state.current}
                    total={this.state.total}
                    pageSize={3}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
