import React from "react";
import friendService from "./friendService";
import { toast } from "react-toastify";
import PersonCard from "./CloneFriend";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class FriendsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: " ",
      mappedPeople: [],
      searchedFriends: "",
      currentPage: 0,
      friends: 0,
    };
  }
  componentDidMount() {
    friendService
      .getAllFriends(this.state.currentPage)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  }
  onGetAllSuccess = (data) => {
    console.log(data);
    let friendsArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState,
        friends: friendsArray,
        mappedPeople: friendsArray.map(this.mapPerson),
        totalPages: data.data.item.totalPages,
      };
    });
  };
  mapPerson = (person) => (
    <PersonCard
      person={person}
      key={person.id}
      onEdit={this.onEditClick}
      onDel={this.onDeleteClick}
    />
  );
  handlePageChange = (pageNumber) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: pageNumber,
      };
    });
    friendService
      .getAllFriends(pageNumber - 1)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  };
  onEditClick = (person) => {
    person.primaryImage = person.primaryImage.imageUrl;
    person.skills = "N/A";
    this.props.history.push(`/friends/${person.id}/edit`, {
      currFriend: person,
    });
  };
  onDeleteClick = (person) => {
    friendService
      .deleteFriend(person.id)
      .then(this.onDeleteSuccess)
      .catch(this.onFailure);
  };
  onDeleteSuccess = (deletedPerson) => {
    console.log("onDelete", { deletedPerson: deletedPerson });
    toast.success("Deleted succesfully");
    this.setState((prevState) => {
      const indexOfPerson = prevState.mappedPeople.findIndex(
        (singleArrayMember) => singleArrayMember.id === deletedPerson.id
      );
      const updatedPeople = [...prevState.mappedPeople];
      if (indexOfPerson >= 0) {
        updatedPeople.splice(indexOfPerson, 1);
      }
      return {
        mappedPeople: updatedPeople,
      };
    });
  };
  onSearchType = (e) => {
    let target = e.target;
    let val = target.value;
    this.setState({ searchData: val });
  };
  onSearchClick = () => {
    friendService
      .searchForFriends(this.state.searchData)
      .then(this.onSearchSuccess)
      .catch(this.onFailure);
  };
  onSearchSuccess = (data) => {
    console.log(data);
    let searchArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState.searchedFriends,
        mappedPeople: searchArray.map(this.mapSearch),
      };
    });
  };
  mapSearch = (person) => (
    <PersonCard
      person={person}
      key={person.id}
      onEdit={this.onEditClick}
      onDel={this.onDeleteClick}
    />
  );
  onAddClick = () => {
    this.props.history.push("/friends/new");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Here"
              aria-label="Search Here"
              aria-describedby="button-addon2"
              onChange={this.onSearchType}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onSearchClick}
            >
              Search
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.onAddClick}
            >
              + Add Friend
            </button>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 g-4 mx-5"
            id="cloneTemplate"
          >
            {this.state.mappedPeople}
            <Pagination
              className="mt-5"
              defaultCurrent
              onChange={this.handlePageChange}
              current={this.state.currentPage}
              pageSize={1}
              total={this.state.totalPages}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsDisplay;
