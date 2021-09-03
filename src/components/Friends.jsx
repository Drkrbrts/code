import React from "react";
import { withRouter } from "react-router-dom";
import friendService from "../services/friendService";
import "./compStyle.css";
import SingleFriend from "./SingleFriend";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  state = {
    currentFriends: [],
    mappedFriends: [],
    activeSearch: false,
    formData: { friendSearch: "" },
  };

  componentDidMount() {
    // console.log("componentDidMount is firing");
    friendService
      .getFirstPage()
      .then(this.onGetAllSuccess)
      .catch(this.onGetAllError);
  }

  onGetAllSuccess = (response) => {
    // console.log(response.data.item.pagedItems);
    this.setState((prevState) => {
      let currentFriends = { ...prevState.currentFriends };
      let mappedFriends = { ...prevState.mappedFriends };
      currentFriends = response.data.item.pagedItems;
      mappedFriends = currentFriends.map(this.mapFriend);
      let totalCountOfFriends = response.data.item.totalCount;
      return { currentFriends, mappedFriends, totalCountOfFriends };
      // return { totalCountOfFriends };
    });
  };

  onGetAllError = (err) => {
    console.error(err);
  };

  onDeleteClick = (e) => {
    friendService
      .deleteById(e.id)
      .then(this.onDeleteByIdSucess)
      .catch(this.onDeleteByIdError);
  };

  onDeleteByIdSucess = (id) => {
    this.setState((prevState) => {
      const updatedMappedItems = prevState.mappedFriends.filter(
        (singleFriend) => {
          return singleFriend.key !== `friend-${id}`;
        }
      );
      return { mappedFriends: updatedMappedItems };
    }, this.stateChanged);
    toast.success("Friend Successfully Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onDeleteByIdError = (response) => {
    console.log(response);
    toast.warn("Unable to Delete friend", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onAddFriendClick = () => {
    this.props.history.push("/friendform/addfriend");
  };

  onPagChange = (currentPage, size) => {
    // console.log(currentPage);
    // console.log(size);
    friendService
      .getByPagination(currentPage, size)
      .then(this.onGetByPaginationSuccess)
      .catch(this.onGetByPaginationError);
  };

  onGetByPaginationSuccess = (response) => {
    // console.log(response);
    this.setState((prevState) => {
      let currentFriends = { ...prevState.currentFriends };
      let mappedFriends = { ...prevState.mappedFriends };
      currentFriends = response.data.item.pagedItems;
      mappedFriends = currentFriends.map(this.mapFriend);
      return { currentFriends, mappedFriends };
    });
  };

  onGetByPaginationError = (response) => {
    console.log(response);
  };

  onSearchClick = (e) => {
    e.preventDefault();
    let currentFormData = this.state.formData.friendSearch;
    let splitFormData = currentFormData.split(" ");
    let finalStringForm = splitFormData.join("%20");
    console.log(finalStringForm);
    friendService
      .getByPaginatedSearch(1, 3, finalStringForm)
      .then(this.onGetByPaginatedSearchSuccess)
      .catch(this.onGetByPaginatedSearchError);
  };

  onGetByPaginatedSearchSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let currentFriends = { ...prevState.currentFriends };
      let mappedFriends = { ...prevState.mappedFriends };
      currentFriends = response.data.item.pagedItems;
      mappedFriends = currentFriends.map(this.mapFriend);
      let totalCountOfFriends = response.data.item.totalCount;
      return { currentFriends, mappedFriends, totalCountOfFriends };
    });
  };

  onGetByPaginatedSearchError = (response) => {
    console.log(response);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let isSearch = true;
      let formData = { ...prevState.formData };
      formData[inputName] = NewValue;
      return { formData, isSearch };
    });
  };

  mapFriend = (oneFriend) => {
    return (
      <SingleFriend
        key={`friend-${oneFriend.id}`}
        friend={oneFriend}
        onClick={this.onDeleteClick}
        {...this.props}
      ></SingleFriend>
    );
  };

  onCancelSearchClick = (e) => {
    e.preventDefault();
    friendService
      .getFirstPage()
      .then(this.onCancelSearchGetAllSuccess)
      .catch(this.onCancelSearchGetAllError);
  };

  onCancelSearchGetAllSuccess = (response) => {
    // console.log(response.data.item.pagedItems);
    this.setState((prevState) => {
      let currentFriends = { ...prevState.currentFriends };
      let mappedFriends = { ...prevState.mappedFriends };
      currentFriends = response.data.item.pagedItems;
      mappedFriends = currentFriends.map(this.mapFriend);
      let totalCountOfFriends = response.data.item.totalCount;
      let isSearch = false;
      let formData = { ...prevState.formData };
      formData.friendSearch = "";
      return {
        currentFriends,
        mappedFriends,
        totalCountOfFriends,
        isSearch,
        formData,
      };
    });
  };

  onCancelSearchGetAllError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Friends
            </strong>
            <button
              className="btn btn-outline-light me-auto"
              onClick={this.onAddFriendClick}
            >
              +Friend
            </button>
            <form className="d-flex">
              <input
                type="text"
                className="form-control mx-2"
                id="friendSearch"
                name="friendSearch"
                placeholder="Search"
                onChange={this.onFormFieldChange}
                value={this.state.formData.friendSearch}
              />
              <button
                className="btn btn-outline-light mx-2"
                onClick={this.onSearchClick}
              >
                Search
              </button>
              {this.state.isSearch ? (
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={this.onCancelSearchClick}
                >
                  Cancel
                </button>
              ) : null}
            </form>
          </div>
        </nav>
        <div className="col-md-12 p-5">
          <Pagination
            pageSize={3}
            total={this.state.totalCountOfFriends}
            onChange={this.onPagChange}
          />
          <div className="row">{this.state.mappedFriends}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Friends);
