import React from "react";
import userService from "./userService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      id: "",
    };
  }
  componentDidMount() {
    userService
      .getCurrentUser()
      .then(this.onCurrUserSuccess)
      .catch(this.onFailure);
  }
  onCurrUserSuccess = (data) => {
    console.log(data.data.item.name + " is logged in");
    this.setState({
      userName: data.data.item.name,
      id: data.data.item.id,
    });
    userService
      .getUserById(this.state.id)
      .then(this.onUserIdSuccess)
      .catch(this.onFailure);
  };
  onUserIdSuccess = (data) => {
    console.log(data);
  };
  onFailure = (data) => {
    console.warn(data);
    this.props.history.push("/login");
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "100%", width: "100%" }}>
          <h1
            style={{ textAlign: "center", position: "absolute", width: "100%" }}
          >
            <strong>Welcome, {this.state.userName}!</strong>
            <div>
              <h6>
                Press the dropdown in the top left corner to begin your journey.
              </h6>
            </div>
          </h1>

          <img
            className="img-fluid"
            alt="welcomeImg"
            src="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZnQlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1520&q=60"
            style={{ height: "100%" }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
