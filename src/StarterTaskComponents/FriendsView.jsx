import React from "react";
import * as friendsService from "../services/friendsService";
import SingleFriend from "./SingleFriend";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import SearchBar from "./SearchBar";
import AltSiteNav from "../AltSiteNav";

class FriendsView extends React.Component {
  state = {
    mappedFriends: [],
    pageSize: 5,
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

    let pageCount = response.data.item;

    this.setState((prevState) => {
      return {
        mappedFriends: response.data.item.pagedItems.map(this.mapFriends),
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
    this.props.history.push("/friends/new", {
      type: "TO_SEARCH",
      payload: [this.state.pageIndex, this.state.pageSize],
    });
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
      <React.Fragment>
        <AltSiteNav></AltSiteNav>
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
            style={{
              padding: "20px",
              position: "absolute",
              left: "150px",
              top: "90px",
            }}
          >
            <button
              className="btn"
              type="button"
              style={{
                borderRadius: "10px",
                backgroundColor: "rgb(131, 104, 143)",
                color: "white",
                height: "50px",
              }}
              onClick={this.onAddFriendsClicked}
            >
              +Friends
            </button>
          </div>
          <SearchBar
            pageSize={this.state.pageSize}
            pageIndex={this.state.pageIndex}
            onSuccessSearch={this.onGetFriendsSuccess}
          ></SearchBar>
          <div style={{ padding: "15px" }} className="row">
            {this.state.mappedFriends}
          </div>
          <Pagination
            onChange={this.changePage}
            pageSize={this.state.pageSize}
            total={this.state.totalCount} //totalCount
          ></Pagination>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsView;
