import React from "react";
import defaultExport from "./friendService";
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
    defaultExport
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
    defaultExport
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
    defaultExport
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
    }, this.stateChanged);
  };
  onSearchType = (e) => {
    let target = e.target;
    let val = target.value;
    this.setState({ searchData: val });
  };
  onSearchClick = () => {
    defaultExport
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
    console.log("search map done");
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
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.onAddClick}
        >
          + Add Friend
        </button>
        <div className="container" id="cloneTemplate">
          {this.state.mappedPeople}
          <Pagination
            className="mt-5"
            defaultCurrent
            onChange={this.handlePageChange}
            current={this.state.currentPage}
            pageSize={1}
            total={5}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsDisplay;
