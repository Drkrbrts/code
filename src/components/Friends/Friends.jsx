import React from "react";
import * as friendsServices from "../../services/friendsServices";
import SingleFriend from "./SingleFriend";
import Pagination from "rc-pagination";
import { NavLink } from "react-router-dom";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  state = {
    friends: [{ title: "", summary: "", primaryImage: "" }],
    pageSize: 3,
    current: 1,
    totalCount: "",
    search: "",
  };

  componentDidMount() {
    this.friend(this.state.current, this.state.pageSize);
  }
  friend = (pageIndex, pageSize) => {
    friendsServices
      .getFriends(pageIndex - 1, pageSize)
      .then(this.onGetSuccess)
      .catch(this.onGetError);
  };

  onGetSuccess = (myFriends) => {
    let frie = myFriends.data.item.pagedItems;
    let totalCount = myFriends.data.item.totalCount;
    console.log(myFriends.data.item.pagedItems);
    this.setState((preState) => {
      return { mappedFriends: frie.map(this.mapFriend), totalCount };
    });
  };
  onGetError = (error) => {
    console.log(error);
  };

  onEditClickFull = (friend) => {
    let ticks = friend.id;
    console.log(friend.id);
    this.props.history.push(`/friend/${ticks}/edit`, friend);
  };

  onDeleteClickFull = (friend) => {
    console.log(friend);
    friendsServices
      .deleteFriendsId(friend.id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };
  onDeleteSuccess = (friend) => {
    console.log("onDelete", friend);

    this.setState((prevState) => {
      const indexOfPerson = prevState.mappedFriends.findIndex(
        (singleArrayMember) => singleArrayMember.props.friend.id === friend
      );
      console.log(indexOfPerson);
      const updatedFriends = [...prevState.mappedFriends];

      if (indexOfPerson >= 0) {
        updatedFriends.splice(indexOfPerson, 1);
      }

      return {
        mappedFriends: updatedFriends,
        formData: null,
      };
    }, this.stateChanged);
  };
  onDeleteError = (error) => {
    console.log(error);
  };

  mapFriend = (oneFriend) => {
    return (
      <SingleFriend
        friend={oneFriend}
        onDelete={this.onDeleteClickFull}
        onEdit={this.onEditClickFull}
        key={oneFriend.id}
      ></SingleFriend>
    );
  };

  searchFriends = (pageIndex, pageSize, query) => {
    friendsServices
      .getSearch(pageIndex - 1, pageSize, query)
      .then(this.onGetSearchSuccess)
      .catch(this.onGetSearchError);
  };
  onGetSearchSuccess = (myFriends) => {
    let pagedItems = myFriends.data.item.pagedItems;
    let totalCount = myFriends.data.item.totalCount;
    console.log(myFriends.data.item.pagedItems);
    this.setState((preState) => {
      return { mappedFriends: pagedItems.map(this.mapFriend), totalCount };
    });
  };
  onGetSearchError = (error) => {
    console.log(error);
  };

  onChange = (current) => {
    this.setState(
      (prevState) => {
        return { ...prevState, current };
      },
      () => this.friend(this.state.current, this.state.pageSize)
    );
  };

  onChangeSearch = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    this.setState((prevState) => {
      let search = { [inputName]: newValue };

      return search;
    });

    console.log(e);
  };
  onSearchClick = (e) => {
    e.preventDefault();
    this.searchFriends(
      this.state.current,
      this.state.pageSize,
      this.state.search
    );
  };

  render() {
    return (
      <div className="col-md-12 p-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          name="search"
          onChange={this.onChangeSearch}
          value={this.state.search}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={this.onSearchClick}
        >
          Search
        </button>
        <NavLink className="btn btn-success" type="submit" to="/friend/new">
          + Friend
        </NavLink>

        <h1>Friends</h1>
        <hr />
        <div className="row">{this.state.mappedFriends}</div>
        <Pagination
          onChange={this.onChange}
          current={this.state.pageIndex}
          pageSize={this.state.pageSize}
          total={this.state.totalCount}
        />
      </div>
    );
  }
}
export default Friends;
