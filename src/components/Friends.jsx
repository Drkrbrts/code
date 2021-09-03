import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import * as userService from "../services/friendsServices";
import SingleFriend from "./SingleFriend";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  state = {
    mappingFriends: [],
  };

  componentDidMount() {
    userService
      .getAllFriends(0, 3)
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  }

  mapFriends = (aFriend) => {
    return (
      <SingleFriend
        key={aFriend.id}
        myFriend={aFriend}
        // editingFriend={this.onEditFriendClicked}
        onClick={this.onEditFriendClicked}
      ></SingleFriend>
    );
  };

  onPaginationClick = () => {
    userService.searchFriends().then().catch();
  };

  onGetAllFriendsSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    console.log(response);

    this.setState(() => {
      let data = response.data.item.pagedItems;
      return {
        mappingFriends: data.map(this.mapFriends),
      };
    });
  };

  onGetAllFriendsError(response) {
    console.log(response);
  }

  onEditFriendClicked = (props) => {
    // console.log(this.state.mappingFriends);
    //
    let id = props.id;
    // console.log(props);
    this.props.history.push("/friendsform/" + id + "/edit");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h3>
              Friends
              <span className="px-3">
                <NavLink to="/friendsform">
                  <button
                    className=" px-2 btn btn-outline-primary"
                    type="submit"
                  >
                    Add Friends
                  </button>
                </NavLink>
              </span>
            </h3>

            <form className="d-flex">
              <input
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger me-2" type="submit">
                Search
              </button>
              <button className="btn btn-outline-primary" type="submit">
                Cancel
              </button>
            </form>
          </div>
        </nav>
        <div className="container">
          <div className="row my-3">{this.state.mappingFriends}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Friends);
