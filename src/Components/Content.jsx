import React from "react";
import * as userService from "../services/userService";

class Content extends React.Component {
  componentDidMount() {
    console.log("Component Did Mount");

    var payload = {
      email: "user1@google.com",
      password: "Password1!",
      tenantID: "U016011FGJE",
    };

    userService
      .logIn(payload)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);

    userService
      .register(payload)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  }

  onLoginSuccess = (response) => {
    console.log({ LogInSuccess: "Success!!!" });
  };

  onLoginError = (errResponse) => {
    console.log({ LogInError: "Error!!!" });
  };

  onRegisterSuccess = (response) => {
    console.log({ RegSuccess: "Success!!!" });
  };

  onRegisterError = (errResponse) => {
    console.log({ RegError: "Error!!!" });
  };

  onButtonClicked = () => {
    console.log("I was clicked", new Date());

    var payload = {
      email: "user1@google.com",
      password: "Password1!",
      tenantID: "U016011FGJE",
    };

    userService
      .logIn(payload)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log("Success");
  };

  onLoginError = (errResponse) => {
    console.log("Error", errResponse);
  };

  render() {
    return (
      <div className="container">
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
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
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
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
            </p>
            <p>
              <button
                type="button"
                className=" btn btn-outline-primary"
                onClick={this.onButtonClicked}
              >
                Activate a Message
              </button>
            </p>
          </div>
          <div>
            <p onClick={this.onButtonClicked}> I am a P tag</p>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default Content;
