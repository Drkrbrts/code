import React from "react";
import * as userService from "../services/usersService";

class Content extends React.Component {
  onClicked = () => {
    console.log("Button was clicked");
    const payload = {
      email: "sabio@sabio.la",
      password: "Sabiopassword1!",
      tenantId: "bootcamp1",
    };
    userService
      .logIn(payload)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };

  onLogInSuccess = (response) => {
    console.log(response, "Success! You are logged in");
    return response.data;
  };

  onLogInError = (errResponse) => {
    console.log(errResponse, "Yikes, what happened?");
    return Promise.reject(errResponse);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <button className="btn btn-secondary">View details &raquo;</button>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <button className="btn btn-secondary">View details &raquo;</button>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <button className="btn btn-secondary">View details &raquo;</button>
          </p>
        </div>
        <p>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.onClicked}
          >
            Click Me!
          </button>
        </p>
      </div>
    );
  }
}

export default Content;
