import React from "react";
/* import ReactDOM from 'react-dom' */
import * as friendService from "../auth/friendService";
import SingleFriend from "./SingleFriend";
import { toast } from "react-toastify";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";

class Friends extends React.Component {
  state = {
    friends: [],
    friendsList: [],
    current: 1,
    friendsLength: 0,
    searchQuery: "",
  };

  onSearchChange = (event) => {
    console.log("event", event);
    let value = event.target.value;
    console.log(value);
    this.setState((prevState) => {
      let oldState = { ...prevState };
      oldState.searchQuery = value;
      return { searchQuery: value };
    });
  };

  onSearchClick = (e) => {
    e.preventDefault();
    let searchResults = this.state.friendsList.filter(this.filterFriends);
    console.log("These are the search results to your search:", searchResults);
    this.setState((prevState) => {
      return { friends: searchResults.map(this.mapFriends) };
    });
  };

  filterFriends = (friend) => {
    console.log(friend);
    if (friend.title.includes(this.state.searchQuery)) {
      return friend;
    }
  };

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
    friendService
      .getFriends(page - 1, 4)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  componentDidMount() {
    if (this.props.user.isLoggedIn === false) {
      this.props.history.push("/login");
      this.setState((prevState) => {
        let empty = [];
        return { friends: empty };
      });
    } else {
      friendService
        .getFriends(0, 4)
        .then(this.onGetFriendsSuccess)
        .catch(this.onGetFriendsError);
    }
  }

  onAddFriendClick = () => {
    this.props.history.push("/addfriend");
  };

  onEditClick = (id) => {
    friendService
      .getById(id)
      .then(this.getByIdSuccess)
      .catch(this.getByIdError);
  };

  deleteFriend = (id) => {
    friendService
      .deleteFriend(id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };

  onGetFriendsSuccess = (response) => {
    console.log(response.data.item.totalCount);
    let friendsArr = response.data.item.pagedItems;
    let size = response.data.item.totalCount;
    this.setState((prevState) => {
      return {
        friends: friendsArr.map(this.mapFriends),
        friendsLength: size,
        friendsList: friendsArr,
      };
    });
  };

  onDeleteSuccess = (response) => {
    console.log(response);
    this.toastMessage(true);
    friendService
      .getFriends(0, 10)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  getByIdSuccess = (response) => {
    console.log(response);
    var friend = response.data.item;
    this.props.history.push(`/addfriend/${friend.id}/edit`);
  };

  getByIdError = (err) => {
    console.log({ error: err });
    this.toastMessage("getByIdError");
  };

  onDeleteError = (err) => {
    console.log({ error: err });
    this.toastMessage("deleteError");
  };

  toastMessage = (handler) => {
    if (handler === true) {
      toast.success("Delete Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (handler === "getError") {
      toast.error("Error Getting Friends!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (handler === "deleteError") {
      toast.error("Error Deleting Friend!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (handler === "getByIdError") {
      toast.error("Error Grabbing Friend By Id!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  onGetFriendsError = (err) => {
    console.log({ error: err });
    this.toastMessage("getError");
  };

  logClick = (obj) => {
    console.log("in log click", obj);
  };

  mapFriends = (friend) => {
    return (
      <React.Fragment key={`friend-${friend.id}`}>
        <SingleFriend
          friend={friend}
          onClick={this.logClick}
          deleteFriend={this.deleteFriend}
          editClick={this.onEditClick}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="m-auto">Friends</h1>
          <form className="col-4 m-auto">
            <div className="row">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                onChange={this.onSearchChange}
              />
              <button className="btn btn-primary" onClick={this.onSearchClick}>
                Search
              </button>
            </div>
          </form>

          <button
            className="btn btn-primary my-3"
            onClick={this.onAddFriendClick}
          >
            Add Friend
          </button>
          <div className="row">{this.state.friends}</div>
          <Pagination
            onChange={this.onChange}
            current={this.state.current}
            total={this.state.friendsLength * 2.5}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default React.memo(Friends);
/* ReactDOM.render(<Pagination/>, container) */
