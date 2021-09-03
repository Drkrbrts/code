import React from "react";
import { NavLink } from "react-router-dom";
import * as friendService from "../services/friendService";

class FriendsNav extends React.Component {
  state = {};

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    friendService
      .searchFriend(this.state)
      .then(this.onSearchFriendsSuccess)
      .catch(this.onSearchFriendsError);
  };

  onSearchFriendsSuccess = (response) => {
    console.log(response);
  };

  onSearchFriendsError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <>
        <header className="bg-dark text-white">
          <div className="container margin-left: none">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="container">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-10 justify-content-left mb-md-0">
                  <li>
                    <NavLink
                      to="/friends/new"
                      exact={true}
                      {...this}
                      className="nav link px-2 text white btn btn-danger"
                    >
                      + Friend
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Friends"
                    aria-label="Search"
                    name="searchBar"
                    onChange={this.onFormFieldChanged}
                  ></input>
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={this.onSubmitHandle}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default FriendsNav;
