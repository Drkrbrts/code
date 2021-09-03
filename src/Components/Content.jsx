import React from "react";
import * as userService from "../services/userService";

class Content extends React.Component {
  onButtonClicked = () => {
    console.log("I was Clicked");
    userService.logIn().then(this.onActionSuccess).catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log(response);
  };

  onActionError = (errResponse) => {
    console.log(errResponse);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-5">
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
          <div className="col-md-4 p-5">
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
          <div className="col-md-4 p-5">
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
                className="btn btn-secondary"
                onClick={this.onButtonClicked}
              >
                Click Me &raquo;
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
