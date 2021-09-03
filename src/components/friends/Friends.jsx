import React from "react";
import * as userService from "../../services/userServices"
import SingleFriend from "./SingleFriend";
import { NavLink } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNav from "../UserNav";

class Friends extends React.Component {
  state = {
    friends: [
      {
        id: 1,
        name: "hardcoded name",
        summary: "hardcoded summary",
        avatar:
          "https://i.pinimg.com/originals/42/e6/d4/42e6d4daaae1f88070d61ce361503912.jpg",
      },
    ],
    pages: {
      current: 0,
      pageSize: 3,
      totalPages: 25,
    },
    searchField: "",
  };
  onSearchChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    this.setState(() => {
      let searchData = { ...this.state };
      searchData.searchField = newValue;
      return searchData;
    });
  };
  onSubmitSearch = (e) => {
    console.log("click");
    e.preventDefault();
    var copy = { ...this.state };
    let data = {
      searchValue: copy.searchField,
    };
    userService
      .searchFriend(data.searchValue)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log("search successful", response.data.item);
    var friend = [response.data.item];
    toast.success("Search successful");
    this.props.history.push("/friends/101");
    this.setState((preState) => {
      // blocker: ERROR; friend.map is not a function
      // solution: because friend need to be an ARRAY!
      return {
        mappedFriends: friend.map(this.mapFriend),
        // totalPage: this.state.pages.totalPages,
      };
    });
  };

  onSearchError = (response) => {
    console.warn({ error: response });
    toast.error("Search Error");
  };

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
    //when clicked to new page, use ajax call to display new friends
    userService
      .getFriends(page, this.state.pages.pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
    this.props.history.push("/friends/" + page);
  };

  componentDidMount() {
    console.log(
      "Friends component did mount",
      this.state.pages.current,
      this.state.pages.pageSize
    );
    let currentPageIndex = this.state.pages.current;
    let pageSize = this.state.pages.pageSize;
    userService
      .getFriends(currentPageIndex, pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  }

  addFriendBtn = () => {
    console.log("add");
    this.props.history.push("/friends/add");
  };

  onGetFriendsSuccess = (response) => {
    //map through friends array to get information
    var friends = response.data.item.pagedItems;
    console.log("getting friends success", friends);
    this.setState((preState) => {
      return {
        mappedFriends: friends.map(this.mapFriend),
        totalPage: this.state.pages.totalPages,
      };
    });
    console.log("total pages", this.state.pages.totalPages);
  };

  onGetFriendsError = (response) => {
    console.warn({ error: response });
  };

  onFriendClick = (friend) => {
    console.log(friend);
  };

  onFriendEdit = (friend) => {
    console.log("edit", friend.id);
    this.props.history.push(`/friends/edit/${friend.id}`);
    userService
      .friendData(friend.id)
      .then(this.onFriendDataSuccess)
      .catch(this.onFriendDataError);
  };

  onFriendDataSuccess = (response) => {
    console.log("friendata success", response);
  };
  onFriendDataError = (response) => {
    console.warn({ error: response });
  };
  onFriendDelete = (friend) => {
    console.log("delete", friend);
    userService
      .deletePerson(friend.id)
      .then(this.OnDeleteSuccess)
      .catch(this.onDeleteError);
  };
  OnDeleteSuccess = (response) => {
    console.log("successful delete", response);
    // this.props.history.push("/friends/");
    // remove card
  };
  onDeleteWarn = (response) => {
    console.warn({ error: response });
  };

  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={`Friends- ${oneFriend.id}`}>
        <SingleFriend
          friend={oneFriend}
          onClick={this.onFriendClick}
          onDelete={this.onFriendDelete}
          onEdit={this.onFriendEdit}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  mapFriendSimple = (oneFriend) => {
    return <p key={`Friends- ${oneFriend.id}`}>{oneFriend.name}</p>;
  };
  render() {
    return (
      <React.Fragment>
        <UserNav />
        <div className="container p-5">
          <div className="container col-2">
            <div className="row">
              <form className="col-32 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="text"
                  className="form-control form-control-dark text-center"
                  name="search"
                  placeholder="Enter Friend Slug..."
                  aria-label="Search"
                  onChange={this.onSearchChange}
                  value={this.state.searchField}
                />
              </form>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={this.onSubmitSearch}
                >
                  Search Friend
                </button>
              </div>
              {/* <div className="text-end">
                <NavLink to="/register">
                  <button
                    type="button"
                    className="btn btn-outline-light me-2"
                    onClick={this.logoutUser}
                  >
                    Logout
                  </button>
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>

        <div className="col-md-12 p-5">
          <h1>Friends</h1>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.addFriendBtn}
          >
            Add a Friend
          </button>
          <hr />
          <div className="row">
            {/* {this.state.friends.map(this.mapFriend)} */}
            {this.state.mappedFriends}
          </div>
        </div>
        <Pagination
          onChange={this.onChange}
          current={this.state.pages.current}
          total={this.state.pages.totalPages}
        />
      </React.Fragment>
    );
  }
}
export default Friends;
