import React from "react";
import * as userService from "../services/userService";

class Content extends React.Component {
  onButtonClick = (e) => {
    //e.stopPropagation();
    console.log(`the "Click Here" button was clicked.`);
    let loginPayload = {
      email: "natalie@example.com",
      password: "SabioPassword1!",
      tenantId: "U020QCZUJG6",
    };
    userService
      .logIn(loginPayload)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };
  onActionSuccess = (response) => {
    console.log("user login success", response);
  };
  onActionError = (response) => {
    console.error("user login error", response);
  };

  componentDidMount() {
    console.log("componentDidMount");
    let loginPayload = {
      email: "natalie@example.com",
      password: "SabioPassword1!",
      tenantId: "U020QCZUJG6",
    };
    userService
      .logIn(loginPayload)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  }

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
              <button className="btn btn-secondary mb-2">
                View details &raquo;
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onButtonClick}
              >
                Click Here &raquo;
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
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default Content;
