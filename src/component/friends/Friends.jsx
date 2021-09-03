import React from "react";
import {
  getFriends,
  deleteFriends,
  searchFriend,
} from "../../services/friendService";
import SingleFriend from "./SingleFriend";
import "rc-pagination/assets/index.css";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";

class Friends extends React.Component {
  state = {
    mappedFriends: [],
    idToBeDeleted: [],
    totalFriends: "",
    current: 1,
    searchItem: "",
    pageSize: 3,
    isSearching: false,
  };
  componentDidMount() {
    this.onGetFriends(this.state.current, this.state.pageSize);
  }

  onGetFriends = (pageIndex, pageSize) => {
    console.log(pageIndex, pageSize);

    getFriends(pageIndex - 1, pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  onPaginationClick = (current) => {
    console.log(current);
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          current,
        };
      },
      this.state.isSearching
        ? () => this.onSearch(this.state.searchItem.search)
        : () => this.onGetFriends(this.state.current, this.state.pageSize)
    );
  };

  onGetFriendsSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedFriends: response.data.item.pagedItems.map(this.mapFriend),
        totalFriends: response.data.item.totalCount,
        pageSize: response.data.item.pageSize,
        pageIndex: response.data.item.pageIndex,
        isSearching: false,
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
    console.log(frdToDelete);
    let id = frdToDelete.id;

    deleteFriends(id)
      .then(this.onFriendDeleteSuccess)
      .catch(this.onFriendDeleteError);
  };

  onFriendDeleteSuccess = (id) => {
    console.log(id);
    this.setState((prevState) => {
      const indexOfFriend = prevState.mappedFriends.findIndex(
        (singleArrayFriend) => singleArrayFriend.props.friend.id === id
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

    this.setState(
      (prevState) => {
        let searchValue = { ...prevState.query };

        searchValue[name] = value;

        return { searchItem: searchValue, isSearching: true };
      },
      () => this.onSearch()
    );
  };

  onSearch = () => {
    // if (this.friend.isSearching) {
    //   this.setState((prevState) => {
    //     return { ...prevState, current: 1 };
    //   });
    // }
    let query = this.state.searchItem.search;
    let pageIndex = this.state.current;
    let pageSize = this.state.pageSize;

    console.log(query, pageIndex, pageSize);

    // this.setState((prevState) => {
    //   return { ...prevState, isSearching: true };
    // });

    searchFriend(query, pageIndex - 1, pageSize)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedFriends: response.data.item.pagedItems.map(this.mapFriend),
        totalFriends: response.data.item.totalCount,
        isSearching: true,
      };
    });
  };

  onSearchError = (error) => {
    console.warn(error);
    toast.error(<strong>No Results Found</strong>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h2 className="display-3">
              Friends
              <span className="px-3">
                <button
                  onClick={this.onAddFriendClick}
                  className="add-button btn btn-outline-primary btn-sm"
                  type="submit"
                >
                  + Friend
                </button>
              </span>
            </h2>

            <form className="d-flex">
              <input
                onChange={this.onSearchChange}
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
          {this.state.totalFriends > 3 ? (
            <Pagination
              // onChange={
              //   this.state.searchItem.search
              //     ? this.onSearch
              //     : this.onPaginationClick
              // }
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
