import React from "react";

class Friends extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <h2>Add or Edit Friend</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value=""
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value=""
                  />
                </div>

                <div className="p-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign In
                  </button>
                  &nbsp;
                  <button
                    type="success"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
