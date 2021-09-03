import React from "react";
import ContentComponent from "./contentComponent";

class MainComponent extends React.Component {
  //checkCode function expression
  learnMoreClicked = () => {
    console.log("User wants to learn more..Gathering in formation..");
  };

  // click-handlers above this line

  render() {
    return (
      <>
        <main role="main">
          <div className="container">
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Hello, world!</h1>
                <p className="col-md-8 fs-4">
                  This is a template for a simple marketing or informational
                  website. It includes a large callout called a jumbotron and
                  three supporting pieces of content. Use it as a starting point
                  to create something more unique.
                </p>
                <p>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={this.learnMoreClicked}
                  >
                    Learn more &raquo;
                  </button>
                </p>
              </div>
              <ContentComponent />
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default MainComponent;
