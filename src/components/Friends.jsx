import React from "react";
import { createFriend, searchFriend } from "../services/userService";
import Home from "./Home";

class Friends extends React.Component {
  state = { searchText: { text: "" } };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });

    this.setState(() => {
      let searchText = { ...this.state.searchText };
      searchText[inputName] = newValue;
      console.log(searchText);
      return { searchText };
    });
  };

  onFriendButtonClicked = () => {
    this.props.history.push("/friends/update");
  };

  onSearchButtonClicked = () => {
    searchFriend(this.state.searchText.text)
      .then(this.onSearchFriendSuccess)
      .catch(this.onSearchFriendError);
  };
  onSearchFriendSuccess = (response) => {
    console.log(response);
  };
  onSearchFriendError = (response) => {
    console.warn(response);
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <h1 style={{ padding: "5px" }}>Friends</h1>

                <div style={{ padding: "10px" }}>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.onFriendButtonClicked}
                  >
                    Friends +
                  </button>
                </div>

                <div className="text-end"></div>
              </div>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                  name="text"
                  onChange={this.onFormFieldChanged}
                  value={this.state.searchText.text}
                />
              </form>
              <div style={{ padding: "5px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.onSearchButtonClicked}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>
        <script>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </script>
      </React.Fragment>
    );
  }
}

export default Friends;
