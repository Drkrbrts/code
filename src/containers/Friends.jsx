import React from "react";
// import { search } from "../services/friendsService";
import { getPaginated, deleteById, search } from "../services/genericsService";
import {
  getPaginatedFriends,
  searchFriends,
  deleteFriend,
} from "../services/friendsService";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FriendsSingle from "../components/friends/FriendsSingle";
import SearchText from "../components/search/SearchText";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {
        totalCount: 0,
        currentPage: 1,
        pageSize: 12,
        pagedItems: [],
        mappedFriends: [],
      },
      search: "",
    };
  }

  componentDidMount() {
    this.getPaginate(this.state.friends.currentPage);
  }

  getPaginate = (currentPage) => {
    // console.log("getPaginate firing");
    getPaginatedFriends(currentPage - 1, this.state.friends.pageSize)
      .then(this.mapSuccessResponse)
      .catch(this.onGetPaginatedError);

    // getPaginated("friends", currentPage - 1, this.state.friends.pageSize)
    // .then(this.mapSuccessResponse)
    // .catch(this.onGetPaginatedError);
  };

  mapSuccessResponse = (response) => {
    console.log("mapSuccessReponse", response);
    let item = response.data.item;
    let newFriends = item.pagedItems;
    let totalCount = item.totalCount;

    this.setState((prevState) => {
      let friends = { ...prevState.friends };
      friends.pagedItems = newFriends;
      friends.totalCount = totalCount;
      friends.mappedFriends = newFriends.map(this.mapFriends);

      return { friends };
    });
  };

  mapFriends = (oneFriend) => {
    return (
      <FriendsSingle
        key={`friend-${oneFriend.id}`}
        friend={oneFriend}
        onClick={this.onFriendClickedFull}
      />
    );
  };

  onFriendClickedFull = (friend, action) => {
    // console.log("onFriendClickedFull firing", friend, action);
    action === "delete"
      ? this.onDeleteFriend(friend.id)
      : this.onEditFriend(friend);
  };

  onAddFriendClicked = (e) => {
    e.preventDefault();
    this.props.history.push("/friends/formik");
  };

  onEditFriend = (friend) => {
    console.log("onEditFriend firing", friend);
    this.props.history.push(`/friends/formik/${friend.id}`);
  };

  onDeleteFriend = (friendId) => {
    console.log("onDeleteFriend firing", friendId);
    deleteFriend(friendId)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
    // deleteById("friends", friendId)
    // .then(this.onDeleteFriendSuccess)
    // .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (friendId) => {
    // console.log("onDeleteFriendSuccess", friendId);
    this.setState((prevState) => {
      // console.log("setState firing");
      const indexOfPagedItem = prevState.friends.pagedItems.findIndex(
        (pagedItem) => pagedItem.id === friendId
      );

      const updatedFriends = { ...prevState.friends };

      if (indexOfPagedItem >= 0) {
        updatedFriends.pagedItems.splice(indexOfPagedItem, 1);
      }
      updatedFriends.mappedFriends = updatedFriends.pagedItems.map(
        this.mapFriends
      );

      return { friends: updatedFriends };
    });
    this.message("success", "Friend Successfully Deleted");
  };

  onPageChange = (newPageNumber) => {
    console.log("onPageChange firing", newPageNumber);
    this.setState(
      (prevState) => {
        let friends = { ...prevState.friends };
        friends.currentPage = newPageNumber;
        return { friends };
      },
      () => {
        if (!this.state.search) {
          this.getPaginate(newPageNumber);
        } else {
          this.searchFriends(newPageNumber);
        }
      }
    );
  };

  searchFriends = (page) => {
    console.log("searchFriends firing", page);
    searchFriends(page - 1, this.state.friends.pageSize, this.state.search)
      .then(this.mapSuccessResponse)
      .catch(this.onSearchFriendsError);

    // search(
    //   "friends",
    //   page - 1,
    //   this.state.friends.pageSize,
    //   this.state.search
    // )
    //   .then(this.mapSuccessResponse)
    //   .catch(this.onSearchFriendsError);
  };

  onSearchFieldChange = (currentTarget) => {
    console.log("onSearchFieldChange firing", currentTarget.value);
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    this.setState(
      (prevState) => {
        let newState = { ...prevState };
        newState[inputName] = newValue;
        return newState;
      },
      () => {
        this.searchFriends(1);
      }
    );
  };

  onGetPaginatedError = (err) => {
    console.log("onGetPaginated Error firing", { err });
    this.message(
      "error",
      "There was an error retrieving your friends. Please refresh the page."
    );
  };

  onSearchFriendsError = (err) => {
    console.log("onSearchFriendsError firing", err);
    this.message("error", "Now Friends were found matching your search query");
  };

  onDeleteFriendError = (err) => {
    console.log(err);
    this.message(
      "error",
      "There was an error deleting your friend. Try again."
    );
  };

  message = (type, message) => {
    console.log("message firing", type, message);
    if (type === "success") {
      let notify = () =>
        toast.success(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      notify();
    } else {
      let notify = () =>
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      notify();
    }
  };

  render() {
    return (
      <>
        <div className="row border-bottom flex justify-content-around bg-light">
          <div className="col-2">
            <div className="d-inline">
              <span style={{ fontSize: "40px" }}>Friends</span>
            </div>
            <div className="d-inline mx-3">
              <button
                className="btn btn-primary mb-3"
                onClick={this.onAddFriendClicked}
              >
                + Friend
              </button>
            </div>
          </div>
          <div className="col-3 p-3">
            <SearchText
              search={this.state.search}
              // onSearch={this.onSearchRequested}
              onChangeRequested={this.onSearchFieldChange}
            />
          </div>
        </div>
        <div className="row mt-2 mx-3">
          <div className="col">
            <Pagination
              onChange={this.onPageChange}
              current={this.state.friends.currentPage}
              total={this.state.friends.totalCount}
            />
          </div>
        </div>
        <div className="container flex">
          <div className="row m-4">{this.state.friends.mappedFriends}</div>
        </div>
      </>
    );
  }
}
export default Friends;
