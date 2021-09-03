import React from "react";
import * as friendsService from "../services/friendsService";
import SingleFriend from "./SingleFriend";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import Search from "./SearchBar";

class FriendsView extends React.Component {
  state = {
    mappedFriends: [],
    pageSize: 6,
    totalCount: 0,
    pageIndex: 1,
  };

  componentDidMount() {
    console.log("componentDidMount", this.state);

    this.getPaginate();
  }

  getPaginate = () => {
    friendsService
      .getFriends(this.state.pageIndex - 1, this.state.pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  mapFriends = (friend) => {
    return (
      <React.Fragment key={`friend-${friend.id}`}>
        <SingleFriend
          friend={friend}
          onClick={this.onEditClicked}
          onClick2={this.onDeleteClicked}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  onGetFriendsSuccess = (response) => {
    console.log(response, "onGetFriendsSuccess");

    let pageCount = response.item;

    this.setState((prevState) => {
      return {
        mappedFriends: response.item.pagedItems.map(this.mapFriends),
        pageSize: pageCount.pageSize,
        pageIndex: pageCount.pageIndex,
        totalCount: pageCount.totalCount,
      };
    });
  };

  onGetFriendsError = (error) => {
    console.log(error, "onGetFriendsError");
  };

  onEditClicked = (friend) => {
    console.log(friend);

    this.props.history.push(`/friends/${friend.id}/edit`, {
      type: "TO_UPDATE",
      payload: friend || "",
    });
  };

  onDeleteClicked = (friend) => {
    console.log(friend);

    friendsService
      .toDelete(friend.id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (response) => {
    console.log(response, "onDeleteSuccess");

    this.setState((prevState) => {
      const indexOfPerson = prevState.mappedFriends.findIndex(
        (friend) => friend.props.children.props.friend.id === response.id
      );

      console.log(indexOfPerson);

      const updatedPeople = [...prevState.mappedFriends];
      console.log(updatedPeople, "update1");

      if (indexOfPerson >= 0) {
        updatedPeople.splice(indexOfPerson, 1);
      }

      return {
        mappedFriends: updatedPeople,
      };
    }, this.stateChanged);
  };

  onDeleteError = (response) => {
    console.log(response, "onDeleteError");
  };

  onAddFriendsClicked = () => {
    this.props.history.push("/friends/new");
  };

  changePage = (page) => {
    console.log(page);
    // axios call

    this.setState(
      (prevstate) => {
        return {
          pageIndex: page,
        };
      },
      () => this.getPaginate()
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <h1
            className="col-3"
            style={{ padding: "15px", marginBottom: "50px" }}
          >
            Friends
          </h1>
        </div>
        <div
          className="col-2"
          style={{ padding: "20px", position: "absolute", left: "150px" }}
        >
          <button
            className="btn btn-primary"
            type="button"
            style={{ borderRadius: "10px" }}
            onClick={this.onAddFriendsClicked}
          >
            +Friends
          </button>
        </div>

        <Search
          pageSize={this.state.pageSize}
          pageIndex={this.state.pageIndex}
        ></Search>

        <div style={{ padding: "15px" }} className="row">
          {this.state.mappedFriends}
        </div>
        <Pagination
          onChange={this.changePage}
          pageSize={this.state.pageIndex}
          total={this.state.totalCount} //totalCount
        ></Pagination>
      </div>
    );
  }
}

export default FriendsView;
