import React from "react";
import "rc-pagination/assets/index.css";
import { logOut, current, userId } from "../services/userService";

class Home extends React.Component {
  componentDidMount() {
    current().then(this.currentSuccess).catch(this.currentError);
  }

  currentSuccess(response) {
    console.log("Log out");
  }

  onLogOutClicked = (e) => {
    console.log("Log Out was clicked" + new Date());
    this.props.history.push("/login");
  };

  render() {
    return (
      <React.Fragment>
        Welcome UserID
        <div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={this.onLogOutClicked}
          >
            Log Out
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
