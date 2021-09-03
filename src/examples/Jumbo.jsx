import React from "react";

class Jumbo extends React.Component {
    render() {
        return(
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Hello, world!</h1>
                <p className="col-md-8 fs-4">
                  This is the homepage for the Starter Task.
                </p>
                <p>
                  <button className="btn btn-primary btn-lg">
                    Learn more &raquo;
                  </button>
                </p>
              </div>
            </div>
        );
    }
}

export default Jumbo;