import React from "react"
import { toast } from "react-toastify";
import * as userService from "../services/userService"

class SiteNav extends React.Component{

    //####### CODINGCHALLENGE #######//
    onWidgetClick = (e) => {
      e.preventDefault();
      this.props.history.push("/widget")
    }
    //####### CODINGCHALLENGE #######//

    componentDidMount(){
      console.log("componentDidMount() -> SiteNav");
    }

    //####### BUTTONS #######//
    onLogoClick = (e) => {
      e.preventDefault();
      this.props.history.push("/")
    }

    onHomeClick = (e) => {
      e.preventDefault();
      this.props.history.push("/home")
    }

    onFriendsClick = (e) => {
      e.preventDefault();
      this.props.history.push("/friends");
    }

    onJobsClick = (e) => {
      e.preventDefault();
      this.props.history.push("/jobs")
    }


    onLogInClick = (e) => {
      e.preventDefault();
      console.log("onLoginClick() was clicked!");
      this.props.history.push("/login")
    }

    onLogOutClick = (e) => {
      e.preventDefault();
      userService.logOut()
          .then(this.onLogOutSuccess)
          .catch(this.onLogOutError)
    }

    onSignUpClick = (e) => {
        console.log("onSignUpClick() was clicked!");
        this.props.history.push("/register")
    }

    //####### SUCCESS HANDLERS #######//
    onLogOutSuccess = (response) => {
        console.log(response.data, "onLogOutSuccess");
        this.props.handleLogOut();
        toast.warning("Successfully logged out.")
        this.props.history.push("/")
    }

    //####### ERROR HANDLERS #######//
    onLogOutError = (errResponse) => {
        console.log({error: errResponse});
    }
    
    //####### CONDITIONAL RENDERING #######//
    renderLoggedUserNav = (state) => {
      if(state)
      {
        return(
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a
                    href="/"
                    onClick={this.onLogoClick}
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
                      className="nav-link px-2 text-secondary link-button" onClick={this.onHomeClick}
                  >
                      Home
                  </button>
                  </li>
                  <li>
                  <button className="nav-link px-2 text-white link-button" onClick={this.onFriendsClick}>
                      Friends
                  </button>
                  </li>
                  <li>
                  <button
                      className="nav-link px-2 text-white link-button"
                  >
                      Blogs
                  </button>
                  </li>
                  <li>
                  <button
                      className="nav-link px-2 text-white link-button"
                  >
                      Tech Co.
                  </button>
                  </li>
                  <li>
                  <button
                      className="nav-link px-2 text-white link-button" 
                      onClick={this.onJobsClick}
                  >
                      Jobs
                  </button>
                  </li>
                  <li>
                  <button
                      className="nav-link px-2 text-white link-button"
                  >
                      Events
                  </button>
                  </li>

                  {/* //####### CODINGCHALLENGE #######// */}
                  <li className="px-2">
                    <button
                        className="btn btn-outline-success me-2"
                        onClick={this.onWidgetClick}
                    >
                        Widget
                    </button>
                  </li>
                  {/* //####### CODINGCHALLENGE #######// */}
                  
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
                  Search
                  </button>
                  <button type="button" className="btn btn-outline-warning me-2" onClick={this.onLogOutClick}>
                  Logout
                  </button>
              </div>
          </div>
      )} else {
        return(
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              onClick={this.onLogoClick}
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

              {/* //####### CODINGCHALLENGE #######// */}
              <li className="px-2">
                <button
                    className="btn btn-outline-success me-2"
                    onClick={this.onWidgetClick}
                >
                    Widget
                </button>
              </li>
              {/* //####### CODINGCHALLENGE #######// */}

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
              <button type="button" className="btn btn-outline-light
                me-2"          
                onClick={this.onLogInClick}>
                Login
              </button>
              <button type="button" className="btn btn-warning me-2" onClick={this.onSignUpClick}>
                Sign-up
              </button>
            </div>
          </div>
      );
      }
    }

    render(){
      const isLoggedIn = this.props.currentUser.isLoggedIn 

        return(
            <React.Fragment>
              {this.renderLoggedUserNav(isLoggedIn)}
            </React.Fragment>
        );
    }
}

export default SiteNav