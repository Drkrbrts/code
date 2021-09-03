import React from "react";
import { friendDelete } from "../services/friendService";
import { friendGetAll } from "../services/friendService";
import { searchFriend } from "../services/friendService";
import FriendsCardRender from "./FriendsCardRender";

class FriendsHome extends React.Component {
  state = {
    formSearch: { text: "" },
  };

  componentDidMount() {
    friendGetAll().then(this.friendGetAllSuccess).catch(this.friendGetAllError);
  }

  friendGetAllSuccess = (response) => {
    console.log({
      "friendGetAll Success!!": response.data.item.pagedItems,
    });
    let friends = response.data.item.pagedItems;
    console.log(friends);

    this.setState((prevState) => {
      return {
        mappedFriends: friends.map(this.mapFriend),
      };
    });
  };

  friendGetAllError = (response) => {
    console.log({ "friendGetAllError...": response });
  };

  onFriendsDeleteClicked = (id) => {
    console.log("delete clicked!");
    console.log(id);

    friendDelete(id)
      .then(this.friendDeleteSuccess)
      .catch(this.friendDeleteError);
  };

  friendDeleteSuccess = (response) => {
    console.log({ "friendDelete Success!!!": response });
    // remove from the DOM
  };

  friendDeleteError = (response) => {
    console.log({ "friendDelete Error...": response });
  };

  onFriendsEditClicked = (id) => {
    console.log("edit clicked!!");
    // console.log(e.currentTarget.dataset.friendId);
    // let friendId = e.currentTarget.dataset.friendId;

    // this.props.history.push(`/friends/${friendId}/edit`, friendId);
    this.props.history.push(`/friends/${id}/edit`, id);
  };

  onFormSearchChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let newInput = currentTarget.name;

    this.setState(() => {
      let formSearch = { ...this.state.formSearch };
      formSearch[newInput] = newValue;
      return { formSearch };
    });
  };

  onSearchFriendClicked = () => {
    console.log(this.state.formSearch.text);
    let searchTerm = this.state.formSearch;
    searchFriend(searchTerm)
      .then(this.SearchFriendSuccess)
      .catch(this.SearchFriendError);
  };

  SearchFriendSuccess = (response) => {
    //Show the results of search
    console.log({ "searchFriendSuccess!!": response });
  };
  SearchFriendError = (response) => {
    console.log({ searchFriendError: response });
  };

  // onClickedFriendFull = () => {
  //   console.log("clicked friend full");
  // };

  onAddFriend = () => {
    console.log("clicked add");
    this.props.history.push("/friends/edit");
  };

  mapFriend = (oneFriend) => {
    //should be a component ... need to pass props
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <FriendsCardRender
          banana={oneFriend}
          onFriendsDeleteClicked={this.onFriendsDeleteClicked}
          onFriendsEditClicked={this.onFriendsEditClicked}
        />
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="search-bar p-5">
          <h3>Friends</h3>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={this.onAddFriend}
          >
            Friend+
          </button>
          <form className="col-4 col-sm-auto mb-3 mb-sm-0 me-sm-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search for Friends"
              name="searchFriend"
              onChange={this.onFormSearchChanged}
              value={this.state.formSearch.searchFriend}
            />
          </form>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={this.onSearchFriendClicked}
          >
            Search
          </button>
        </div>

        <div className="col-md-12 p-5">
          <h1>All your friends!!</h1>
          <hr />
          <div className="row">{this.state.mappedFriends}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsHome;
