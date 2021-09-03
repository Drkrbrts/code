import React from "react";
import { logOut, current, currentById } from "../services/userService";

class Home extends React.Component {
  state = {
    name: "",
  };

  componentDidMount() {
    current().then(this.onUserRenderSuccess).catch(this.onUserRenderError);
  }

  onLogoutClicked = () => {
    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };
  onLogOutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");
  };
  onLogOutError = (response) => {
    console.warn(response);
  };
  onUserRenderSuccess = (response) => {
    console.log(response.data.item.id);
    currentById(response.data.item.id)
      .then(this.onByIdSuccess)
      .catch(this.onByIdError);
  };
  onUserRenderError = (response) => {
    console.warn(response);
  };
  onByIdSuccess = (response) => {
    console.log(response.data.item.firstName);
    this.setState({ name: response.data.item.firstName });
  };
  onByIdError = (response) => {
    console.warn(response);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 style={{ padding: "15px" }}>Welcome {this.state.name} !!</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
