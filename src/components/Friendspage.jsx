import React from "react";
import friendsService from "../services/friendsService";
import SingleFriend from "./SingleFriend";

class Friendspage extends React.Component {
  state = {
    // isAddorEdit: false,
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
  };
  componentDidMount() {
    friendsService
      .getAll()
      .then(this.ongetAllSuccess)
      .catch(this.ongetAllError);
  }
  ongetAllSuccess = (myFriends) => {
    console.log({ GetallFriendsSuccess: myFriends });
    let friendsData = myFriends.data.item.pagedItems;

    console.log(friendsData);

    this.setState((preState) => {
      return {
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
    this.props.history.push(`/friends?add`);
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

    this.props.history.push(`/friends?id=${press.id}`);
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
  };

  onGetByIdError = (Err) => {
    console.log({ GetbyIdError: Err });
  };

  onSubmitClicked = (e) => {
    e.preventDefault();

    var updateData = this.state.formData;

    if (this.props.location.search === "?add") {
      friendsService
        .add(updateData)
        .then(this.onAddSuccess)
        .catch(function (response) {
          console.warn(response);
        });
    } else {
      friendsService
        .updateById(updateData)
        .then(this.onupdateByIdSuccess)
        .catch(function (response) {
          console.warn(response.response.data.errors);
        });
    }
  };
  onAddSuccess = (response) => {
    console.log({ addSuccess: response });
    window.location.replace("/friends");
  };
  onupdateByIdSuccess = (response) => {
    console.log({ updateSuccess: response });
    window.location.replace("/friends");
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
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
        mappedFriends: searchingData.map(this.mapFriend),
      };
    });
    this.props.history.push(`/friends/`);
  };
  onSearchError = (response) => {
    let errorMessage = response.response.data.errors;
    console.log(errorMessage);
    // this.props.error = errorMessage;
  };

  render() {
    return (
      <>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <a
              href="/"
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
            </a>
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
              <a href>
                <button
                  type="button"
                  className="btn btn-danger searchButton"
                  onClick={this.onSearchClicked}
                >
                  Search
                </button>
              </a>
            </div>
          </div>
        </header>

        <div className="row">
          <div
            className={`row ${
              // this.props.location.pathname !== "/friends" ||
              this.props.location.search ? "d-none" : {}
            }`}
          >
            {this.state.mappedFriends}
          </div>
        </div>

        <form
          id="formTemplate"
          className={
            // this.props.location.pathname !== "/friends" ||
            this.props.location.search ? {} : "d-none"
          }
        >
          <div className="row g-3 align-items-center">
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputTitleLabel" className="col-form-label">
                  Title
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="title"
                  id="inputTitle"
                  className="form-control"
                  name="title"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.title}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputBioLabel" className="col-form-label">
                  Bio
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Bio"
                  id="inputBio"
                  className="form-control"
                  name="bio"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.bio}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSummaryLabel" className="col-form-label">
                  Summary
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Summary"
                  id="inputSummary"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.summary}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputHeadlineLabel" className="col-form-label">
                  Headline
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Headline"
                  id="inputHeadline"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.headline}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSlugLabel" className="col-form-label">
                  Slug
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Slug"
                  id="inputSlug"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.slug}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputStatusLabel" className="col-form-label">
                  Status
                </label>
              </div>
              <div className="col-sm-5">
                <select
                  className="form-control"
                  name="statusId"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.statusId}
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>NotSet</option>
                  <option>Deleted</option>
                  <option>Flagged</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSkillsLabel" className="col-form-label">
                  Skills
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Skills"
                  id="inputSkills"
                  className="form-control"
                  name="skills"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.skills}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label
                  htmlFor="inputPrimaryImageLabel"
                  className="col-form-label"
                >
                  Primary Image
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Primary Image"
                  id="inputPrimaryImage"
                  className="form-control"
                  name="primaryImage"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.primaryImage}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary sumbitButton"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="searchError d-none" id="searchErrorMessage" />
      </>
    );
  }
}
export default Friendspage;
