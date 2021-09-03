import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSuccessful: true,
      transactionId: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .get("https://api.remotebootcamp.dev/api/users/logout", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ posts: response.data });
        toast.success("User Signed Out Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User Not Signed In..");
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/home" className="nav-link">
                  Logout
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends" className="nav-link">
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="nav-link">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/tech co" className="nav-link">
                  Tech Co.
                </NavLink>
              </li>
              <li>
                <NavLink to="/jobs" className="nav-link">
                  Jobs
                </NavLink>
              </li>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={this.submitHandler}
                >
                  LogOut
                </button>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
