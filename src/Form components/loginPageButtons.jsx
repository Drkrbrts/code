import React from "react";
import RegisterPage from "./registerPage";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <div className="col-12">
          <button className="btn  btn-primary" type="submit">
            Sign in
          </button>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={RegisterPage}
          >
            Register
          </button>
        </div>
      </>
    );
  }
}

export default Buttons;
