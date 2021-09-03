import React from "react";

class Content extends React.Component {
  onButtonClicked = (e) => {
    console.log("I was clicked", e.currentTarget);
    this.props.history.push("/details");
  };

  render() {
    return (
      <React.Fragment>
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
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.onButtonClicked}
                >
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
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.onButtonClicked}
                >
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
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.onButtonClicked}
                >
                  View details &raquo;
                </button>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
