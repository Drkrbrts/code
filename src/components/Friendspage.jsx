import React from "react";
import friendsService from "../services/friendsService";
import SingleFriend from "./SingleFriend";
import Pagination from "rc-pagination";

class Friendspage extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      status: "",
      skills: "",
      primaryImage: "",
    },
    searchData: "",
    current: 1,
    pageSize: 2,
    total: 0,
  };

  componentDidMount() {
    friendsService
      .getAll(this.state.current - 1, this.state.pageSize)
      .then(this.ongetAllSuccess)
      .catch(this.ongetAllError);
  }
  ongetAllSuccess = (myFriends) => {
    console.log({ GetallFriendsSuccess: myFriends });
    let friendsData = myFriends.data.item.pagedItems;

    console.log(friendsData);

    this.setState((preState) => {
      return {
        total: myFriends.data.item.totalCount,
        mappedFriends: friendsData.map(this.mapFriend),
      };
    });
  };
  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <SingleFriend
          friend={oneFriend}
          onDeleteClick={this.onDeleteClick}
          onEditClick={this.onEditClick}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  ongetAllError(response) {
    console.log({ GetallError: response });
  }

  onAddClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/friends/add`);
  };

  onDeleteClick = (press) => {
    console.log(press);

    friendsService
      .deleteFriend(press.id)
      .then(this.onDeleteSuccess)
      .catch(function (response) {
        console.log({ deleteError: response });
      });
  };
  onDeleteSuccess = (response) => {
    console.log({ deleteSuccess: response });
    window.location.replace("/friends");
  };

  onEditClick = (press) => {
    console.log(press);

    friendsService
      .getById(press.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  };
  onGetByIdSuccess = (response) => {
    console.log(response);
    let friendItem = response.data.item;

    console.log(friendItem);
    this.setState((prevState) => {
      let formData = { ...this.state.formData };
      formData = friendItem;
      if (friendItem.skills === null) {
        friendItem.skills = "";
      }
      if (friendItem.primaryImage.imageUrl) {
        friendItem.primaryImage = friendItem.primaryImage.imageUrl;
      }

      return { formData };
    });
    let newData = { ...this.state.formData };
    this.props.history.push(`/friends/${newData.id}/edit`, {
      type: "EDIT_FRIEND",
      friendData: newData,
    });
  };

  onGetByIdError = (Err) => {
    console.log({ GetbyIdError: Err });
  };

  onSearchFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    console.log({ newValue, currentTarget });
    this.setState(() => {
      let searchData = { ...this.state.searchData };
      searchData = newValue;
      return { searchData };
    });
  };
  onSearchClicked = (e) => {
    e.preventDefault();
    let searchInput = this.state.searchData;
    console.log(searchInput);
    friendsService
      .search(searchInput)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (repsonse) => {
    console.log({ searchSuccess: repsonse });
    let searchingData = repsonse.data.item.pagedItems;

    console.log(searchingData);

    this.setState((preState) => {
      return {
        total: repsonse.data.item.totalCount,
        mappedFriends: searchingData.map(this.mapFriend),
      };
    });
  };
  onSearchError = (response) => {
    let errorMessage = response.response.data.errors;
    console.log(errorMessage);
    // this.props.error = errorMessage;
  };

  onChange = (page) => {
    console.log(page);
    this.setState({ current: page }, () =>
      friendsService
        .getAll(page - 1, this.state.pageSize)
        .then(this.ongetAllSuccess)
        .catch(this.ongetAllError)
    );

    // let displaySize =
    // make axios call with page -1
  };

  render() {
    return (
      <>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <div
              className="
        d-flex
        align-items-center
        mb-3 mb-lg-0
        me-lg-auto
        text-dark text-decoration-none
      "
            >
              <svg className="bi me-2" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
              </svg>
              <button
                type="button"
                className="btn btn-primary addFriendButton"
                onClick={this.onAddClick}
              >
                Add Friend
              </button>
            </div>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control"
                id="friendsearch"
                placeholder="Search..."
                aria-label="Search"
                onChange={this.onSearchFieldChange}
              />
            </form>
            <div className="text-end">
              <button
                type="button"
                className="btn btn-danger searchButton"
                onClick={this.onSearchClicked}
              >
                Search
              </button>
            </div>
          </div>
        </header>
        <div className="row">{this.state.mappedFriends}</div>
        <Pagination
          pageSize={this.state.pageSize}
          onChange={this.onChange}
          current={this.state.current}
          total={this.state.total}
        />

        <div className="searchError d-none" id="searchErrorMessage" />
      </>
    );
  }
}
export default Friendspage;
