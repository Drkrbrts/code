import React from "react";

class Jumbo extends React.Component {
    render() {
        return(
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold"
                  style={{
                    textAlign: 'center',
                }}>Hello, world!</h1>
                <p className="col-md-8 fs-4"
                  style={{
                    textAlign: 'center',
                    margin: `auto`
                }}>
                  This is the homepage for the Starter Task!
                </p>
              </div>
            </div>
        );
    }
}

export default Jumbo;