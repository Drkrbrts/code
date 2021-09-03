import React from "react";
import { friendCreate, friendDelete } from "../services/userService";

class FriendsHome extends React.Component {
  onFriendsDeleteClicked = () => {
    console.log("delete clicked!");
    friendDelete().then(this.friendDeleteSuccess).catch(this.friendDeleteError);
  };

  friendDeleteSuccess = (response) => {
    console.log({ "friendDelete Success!!!": response });
  };

  friendDeleteError = (response) => {
    console.log({ "friendDelete Error...": response });
  };
  onFriendsEditClicked = () => {
    console.log("edit clicked!!");
    this.props.history.push("/FriendsEdit");
  };
  onSearchFriend = () => {
    console.log("search friend clicked!!!");
  };
  render() {
    return (
      <React.Fragment>
        <div className="search-bar p-5">
          <h3>Friends</h3>
          <form className="col-4 col-sm-auto mb-3 mb-sm-0 me-sm-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search for Friends"
              aria-label="Search"
            />
          </form>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={this.onSearchFriend}
          >
            Search
          </button>
        </div>
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>

                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger btn-md"
                    onClick={this.onFriendsDeleteClicked}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-md p-10"
                    onClick={this.onFriendsEditClicked}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <img src="..." class="card-img-top" alt="..."></img>

                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger btn-md"
                    onClick={this.onFriendsDeleteClicked}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-md"
                    onClick={this.onFriendsEditClicked}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsHome;
