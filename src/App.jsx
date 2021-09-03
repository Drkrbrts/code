import React from "react";
import { SiteNav } from "./components/navbar";
import Home from "./components-starter/home";
import { Route, BrowserRouter } from "react-router-dom";
import "rc-pagination/assets/index.css";
import { withRouter } from "react-router-dom";
import { getCurrent, getUserInfoById } from "./services/userService";
import FriendsPage from "./components-starter/friends";
import AddFriendForm from "./components-starter/addFriendForm";
import LogInForm from "./components-starter/loginForm";
import { RegisterForm } from "./components-starter/register";
import debug from "sabio-debug";
import JobsPage from "./components-starter/jobs";
import JobsForm from "./components-starter/jobsForm";
import TechCo from "./components-starter/techCo";
import TechForm from "./components-starter/techForm";
import { EventsMain } from "./components-starter/events/eventsMain";
import Modal from 'react-modal';
import Widget from "./components/codechallenge/widget";
import Cars from "./components/codechallenge/Car";


import "./App.css";


const _logger = debug.extend("App");


class App extends React.Component
{
  state = {
    currentUser: {},
    formData: {}
  };

  /////////////////////////////////////////////////
  //
  //
  //    NO FUNCTION DECLARATIONS!
  //
  //
  ////////////////////////////////////////////////


  componentDidMount()
  {

    getCurrent()
      .then(this.onCheckUserStatusSuccess)
      .catch(this.onCheckUserStatusFail);

    _logger(this.props);
  }

  onGetUserInfoSuccess = (response) =>
  {
    _logger("here is the user info:");
    _logger(response);
    this.setState((prevState) =>
    {
      return { ...prevState, currentUser: response.data.item }

    })
  };

  onGetUserInfoFail = (response) =>
  {
    _logger(response);
    _logger("get user info fail");
  };

  onCheckUserStatusSuccess = (response) =>
  {
    _logger("user is logged in");
    _logger(response);
    let userId = response.data.item.id;

    getUserInfoById(userId)
      .then(this.onGetUserInfoSuccess)
      .catch(this.onGetUserInfoFail);
  };

  onCheckUserStatusFail = (response) =>
  {
    _logger(response);
    _logger("no user is logged in");
  };

  render()
  {

    // /////////////////////////
    //
    //     NO LOGIC WITHIN RENDER!
    //
    ////////////////////////////

    return (
      <BrowserRouter>
        <div className="main-container" id="main">
          <SiteNav {...this.props} currentUser={this.state.currentUser} />
          <main role="main" style={{ backgroundColor: "#f5f5f5" }}>



          </main>
        </div>

        <Route
          path="/"
          exact
          render={() => (
            <Home {...this.props} currentUser={this.state.currentUser} />
            // {...this.props}: gives the Home component access to match, location, history.
            // currentUser={this.state.currentUser}: assigns a currentUser property to Home. sets the value as the currentUser that is stored in state.
          )}
        />
        <Route path="/events"
          component={EventsMain}
        />
        <Route path="/techform"
          exact
          component={TechForm}
        />
        <Route path="/techco"
          exact
          component={TechCo}
        />

        <Route path="/jobsform/:id"
          exact
          component={JobsForm}
        />

        <Route path="/jobsform"
          exact
          component={JobsForm}
        />
        <Route path="/jobs"
          exact
          component={JobsPage}
        />
        <Route path="/addFriend/:id"
          exact
          component={AddFriendForm}
        />
        <Route path="/addFriend"
          exact
          component={AddFriendForm}
        />
        <Route path="/friends"
          exact
          component={FriendsPage}
        />
        <Route path="/register"
          exact
          component={RegisterForm}
        />

        <Route path="/login"
          exact
          component={LogInForm}
        />
        <Route path="/widget"
          exact
          component={Widget}
        />
        <Route path="/car"
          exact
          component={Cars}
        />
      </BrowserRouter>
    );
  }
}

Modal.setAppElement(document.getElementById('main'));

export default withRouter(App);
