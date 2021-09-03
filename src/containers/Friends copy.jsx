import React from "react";
import {
  getPaginatedFriends,
  deleteFriend,
  search,
} from "../services/friendsService";
import Pagination from "rc-pagination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "rc-pagination/assets/index.css";
import SingleFriend from "../components/SingleFriend";
import SearchForm from "../components/SearchForm";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {
        totalCount: 0,
        currentPage: 1,
      },
      search: null,
    };
  }

  onAddFriendClicked = (e) => {
    e.preventDefault();
    this.props.history.push("/friends/add/0");
  };

  componentDidMount() {
    // console.log("componentDidMount firing");

    //make ajax call here
    this.getPaginate();
  }

  getPaginate = (currentPage) => {
    if (this.state.friends.totalCount === 0) {
      getPaginatedFriends(0, 12)
        .then(this.mapSuccessResponse)
        .catch(this.onGetPaginatedError);
    } else {
      getPaginatedFriends(currentPage - 1, 12)
        .then(this.mapSuccessResponse)
        .catch(this.onGetPaginatedError);
    }
  };

  mapSuccessResponse = (response) => {
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

  onGetPaginatedError = (err) => {
    console.log("onGetPaginated Error firing", { err });
    let notify = () =>
      toast.error(
        "There was an error retrieving your friends.  Please refresh the page.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  onFriendClickedFull = (friend, action) => {
    // console.log("onFriendClickedFull firing", friend, action);
    action === "delete"
      ? this.onDeleteFriend(friend)
      : this.onEditFriend(friend);
  };

  onDeleteFriend = (friend) => {
    console.log("onDeleteFriend firing", friend.id);
    deleteFriend(friend.id)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (friend) => {
    // console.log("onDeleteFriendSuccess", friend.friendId);
    this.setState((prevState) => {
      // console.log("setState firing");
      const indexOfPagedItem = prevState.friends.pagedItems.findIndex(
        (pagedItem) => pagedItem.id === friend.friendId
      );

      const updatedFriends = { ...prevState.friends };

      if (indexOfPagedItem >= 0) {
        updatedFriends.pagedItems.splice(indexOfPagedItem, 1);
      }
      updatedFriends.mappedFriends = updatedFriends.pagedItems.map(
        this.mapFriends
      );

      let notify = () =>
        toast.success("Friend Successful Deleted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      notify();

      return { friends: updatedFriends };
    });
  };

  onDeleteFriendError = (err) => {
    console.log(err);
    let notify = () =>
      toast.error("There was an error deleting your friend.  Try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  onEditFriend = (friend) => {
    console.log("onEditFriend firing", friend);
    this.props.history.push(`/friends/add/${friend.id}`);
  };

  mapFriends = (oneFriend) => {
    return (
      <SingleFriend
        key={`friend-${oneFriend.id}`}
        friend={oneFriend}
        onClick={this.onFriendClickedFull}
      />
    );
  };

  onPageChange = (page) => {
    console.log("onPageChange firing", page);
    this.setState((prevState) => {
      let friends = { ...prevState.friends };
      friends.currentPage = page;
      return { friends };
    });
    if (this.state.search === null || this.state.search === "") {
      this.getPaginate(page);
    } else {
      this.searchFriends(this.state.search, page);
    }
  };

  onSearchRequested = (formData) => {
    // console.log("onSearchRequested firing", formData);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.search = formData.search;
      return newState;
    }, this.searchFriends(formData.search));
  };

  searchFriends = (searchTerm, page) => {
    console.log("searchFriends firing", searchTerm, page);

    if (page === undefined) {
      console.log("if firing", page);
      search(0, 12, searchTerm)
        .then(this.mapSuccessResponse)
        .catch(this.onSearchFriendsError);
    } else {
      console.log("else firing", page);

      search(page - 1, 12, searchTerm)
        .then(this.mapSuccessResponse)
        .catch(this.onSearchFriendsError);
    }
  };

  onSearchFriendsError = (err) => {
    console.log("onSearchFriendsError firing", err);
    let notify = () =>
      toast.error("Now Friends were found matching your search query", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
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
            <SearchForm
              searchTerm={this.state.search}
              onSearch={this.onSearchRequested}
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
