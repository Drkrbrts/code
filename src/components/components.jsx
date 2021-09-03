import React from "react";
import logIn from "../services/userService";

class SiteNav extends React.Component
{
  render()
  {
    return (
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
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                >
                  Home
                </button>
              </li>
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Features
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  About
                </button>
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
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

class Footer extends React.Component
{
  render()
  {
    return (
      <footer className="container">
        <p>&copy; Sabio 2019-2020</p>
      </footer>
    )
  }
}

class Jumbo extends React.Component
{
  render()
  {
    return (
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
              <button className="btn btn-primary btn-lg">
                Learn more &raquo;
              </button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class Content extends React.Component
{
  componentDidMount()
  {
    console.log("componentDidMount");
    this.onClickHandler();
  }
  // userData = {
  //   email: "user@google.com",
  //   password: "password"
  // };

  onClickHandler = () =>
  {
    const data = {
      email: "david@example.com",
      password: "!Dd123456",
      tenantId: "david@example.com"
    }

    logIn(data)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  }

  onLogInSuccess = (response) =>
  {
    console.log(response)
    console.log("Success!")
  }

  onLogInError = (response) =>
  {
    console.log(response)
  }

  displayMessage = () =>
  {
    console.log("This is a message");
  }

  render()
  {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
              malesuada magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
              <button className="btn btn-primary" onClick={this.onClickHandler}>
                Log In &raquo;
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
              malesuada magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
              <button className="btn btn-primary" onClick={this.onClickHandler}>
                Log In &raquo;
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <button className="btn btn-secondary">
                View details &raquo;
              </button>
              <button className="btn btn-primary" onClick={this.onClickHandler}>
                Log In &raquo;
              </button>
            </p>
          </div>
        </div>

        <hr />
      </div>
    )
  }
}

export { SiteNav, Footer, Jumbo, Content };