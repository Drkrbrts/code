import React from "react";
// import { toast } from "react-toastify";
import { logOut } from "../services/userService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { current } from "../services/userService";

class Home extends React.Component {
  state = {
    formData: {
      name: "",
    },
  };
  onLoginClicked = (e) => {
    console.log("clicked!!");
    // <Link to="/Login"></Link>;
    this.props.history.push("/Login");
  };

  componentDidMount() {
    current().then(this.currentSuccess).catch(this.currentError);
  }
  currentSuccess(response) {
    console.log({ "currentSuccess!!": response.data.item });
    let name = response.data.item.name;
    this.state.formData.push(name);
  }

  currentError(response) {
    console.log({ "currentError...": response });
  }
  onLogoutClicked = (e) => {
    console.log("log out!!");
    logOut().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    console.log({ "logOut Success": response });

    toast("Log out success!!!!");

    this.props.history.push("/Login");
  };

  onLogoutError = (response) => {
    console.log({ "logOut error": response });
    toast("error....");
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Sabio"
                />
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <button className="nav-link px-2 text-secondary link-button">
                    Home
                  </button>
                </li>
                <li>
                  <Link to="/FriendsHome">
                    <button className="nav-link px-2 text-white link-button">
                      Friends
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Blogs">
                    <button className="nav-link px-2 text-white link-button">
                      Blogs
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Tech_Co">
                    <button className="nav-link px-2 text-white link-button">
                      Tech Co.
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Jobs">
                    <button className="nav-link px-2 text-white link-button">
                      Jobs
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Events">
                    <button className="nav-link px-2 text-white link-button">
                      Events
                    </button>
                  </Link>
                </li>
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="text-end">
                <Link to="/Login">
                  <button
                    type="button"
                    className="btn btn-outline-light me-2"
                    onClick={this.onLoginClicked}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/Register">
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="welcome-message">
          <h1>Welcome {this.state.formData.name}!</h1>
        </div>
        <div>
          <Link to="/Login">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.onLogoutClicked}
            >
              Log Out
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
// class Home extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={this.onLoginClicked}
//         >
//           Submit
//         </button>
//       </React.Fragment>
//     );
//   }
// }

export default Home;
