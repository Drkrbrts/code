import React from "react";
import { current, logOut, currentById } from "../../services/UserService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    userName: "",
  };
  onButtonClicked = () => {
    console.log("clicked", new Date());
  };
  onButtonClicked1 = (e) => {
    this.props.history.push("/login");
  };

  onButtonClicked2 = () => {
    this.props.history.push("/");
    console.log("Number Two");
  };

  componentDidMount() {
    current().then(this.onCurrentSuccess).catch(this.onCurrentError);
  }
  onCurrentSuccess = (response) => {
    console.log(response);
    const id = response.data.item.id;
    currentById(id)
      .then(this.onCurrentByIdSuccess)
      .catch(this.onCurrentByIdError);
  };

  onCurrentError = (errResponse) => {
    console.log("No User Found", errResponse);
  };

  onCurrentByIdSuccess = (response) => {
    console.log(response);
    let data = response.data.item.firstName;
    this.setState((preState) => {
      let newState = { ...preState };
      newState.userName = data;
      return newState;
    });
  };
  onCurrentByIdError = (errResponse) => {
    console.log(errResponse);
  };

  onButtonClicked3 = () => {
    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onButtonClicked4 = () => {
    console.log("All of these buttons do something");
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    toast.warning("Logged Out", {
      position: toast.POSITION.TOP_RIGHT,
    });
    this.props.history.push("/");
  };
  onLogOutError = (errResponse) => {
    console.log(errResponse);
  };

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <div style={{ margin: "4rem" }}>
            <div className="container">
              <h1 className="display-3">Hello, {this.state.userName}</h1>
              <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <button
                  style={{ borderRadius: "300px" }}
                  type="button"
                  className="btn btn-light btn-outline-primary btn-lg"
                  onClick={this.onButtonClicked}
                >
                  Learn more &raquo;
                </button>
              </p>
            </div>
          </div>
        </div>
        <div style={{ margin: "3rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card shadow p-3 mb-5 bg-white rounded"
                  style={{ width: "21rem", margin: "1rem", padding: "2rem" }}
                >
                  <h2>LINKS</h2>
                  <div>
                    <div>
                      <Link to="/Tech">
                        <button className="btn btn-link">Tech</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Jobs/new">
                        <button className="btn btn-link">Jobs</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Friends/new">
                        <button className="btn btn-link">Friends</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Events">
                        <button className="btn btn-link">Events</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Blogs">
                        <button className="btn btn-link">Blogs</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Register">
                        <button className="btn btn-link">Register</button>
                      </Link>
                    </div>
                  </div>

                  <div style={{ marginTop: "3rem" }}>
                    <button
                      style={{ borderRadius: "300px" }}
                      className="btn btn-light btn-outline-secondary"
                      onClick={this.onButtonClicked3}
                    >
                      Logout &raquo;
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card shadow p-3 mb-5 bg-white rounded"
                  style={{ width: "21rem", margin: "1rem", padding: "2rem" }}
                >
                  <h2>Heading</h2>
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus. Etiam porta
                    sem malesuada magna mollis euismod. Donec sed odio dui.
                  </p>
                  <p>
                    <button
                      style={{ borderRadius: "300px" }}
                      className="btn btn-light btn-outline-secondary"
                      onClick={this.onButtonClicked2}
                    >
                      Go Home &raquo;
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card shadow p-3 mb-5 bg-white rounded"
                  style={{ width: "21rem", margin: "1rem", padding: "2rem" }}
                >
                  <h2>Heading</h2>
                  <p>
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </p>
                  <p>
                    <button
                      style={{ borderRadius: "300px" }}
                      className="btn btn-light btn-outline-secondary"
                      onClick={this.onButtonClicked3}
                    >
                      Logout &raquo;
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <button
            style={{ borderRadius: "300px" }}
            className="btn btn-secondary"
            onClick={this.onButtonClicked3}
          >
            Logout &raquo;
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
