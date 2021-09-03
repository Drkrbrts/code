import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div className="container ps-10 pe-2 pt-5 pb-5">
        <div className="row shadow">
          <h6 className="text-center">Register a new membership</h6>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

            <div className="form-outline mb-4">
              <input
                type="text"
                className="form-control first-name"
                placeholder="First Name"
              />
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                className="form-control last-name"
                placeholder="Last Name"
              />
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control email"
                placeholder="Email"
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input
                type="password"
                className="form-control password"
                placeholder="Password"
              />
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                className="form-control retype-password"
                placeholder="Retype Password"
              />
            </div>

            {/* <!--Avatar URL--> */}

            <div className="form-outline mb-4">
              <input
                type="text"
                className="form-control avatar-url"
                placeholder="Avatar Url"
              />
            </div>

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3"
                checked
              />
              <label className="form-check-label" for="form2Example3">
                I agree to the <a href="#">terms</a>
              </label>

              {/* <!-- Submit button --> */}
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block register mb-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
