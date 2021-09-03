import React from "react";
import { userLogin } from "./userService";
class Content extends React.Component {
  componentDidMount() {
    var payload = {
      email: "dylan@example.com",
      password: "String123!",
      tenantId: "80808",
    };
    userLogin(payload).then(this.loginSuccess).catch(this.loginError);
  }

  onButtonClicked = (e) => {
    console.log("Testing.. 1... 2... 3..");
    var payload = {
      email: "dylan@example.com",
      password: "String123!",
      tenantId: "80808",
    };
    userLogin(payload).then(this.loginSuccess).catch(this.loginError);
  };

  loginSuccess = (response) => {
    console.log(response);
  };

  loginError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.onButtonClicked}
          >
            Button!
          </button>
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
            <h2 onClick={this.onButtonClicked}>Heading</h2>
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
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
export default Content;
