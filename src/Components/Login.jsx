import React from "react";
class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="exampleInputEmail1"
                />
                <div name="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="exampleInputPassword1"
                />
              </div>
              <div className="button-login">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
