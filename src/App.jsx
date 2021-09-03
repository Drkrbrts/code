import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import "./App.css";
import Header from "./Components/Header"
import RegisterForm from "./Components/RegisterForm"
import Footer from "./Components/Footer"
import People from "./Components/People"
import Blogs from "./Components/Blogs"
import PostWidget from "./Components/codeChallenge/PostWidget"
import { Route ,withRouter} from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import TechCo from "./Components/TechCo";
import Jobs from "./Components/Jobs"
import Events from "./Components/Events"
import LandingPage from "./Components/LandingPage";
import WelcomePage from "./Components/WelcomePage";
import Friends from "./Components/Friends"
import Cars from "./Components/codeChallenge/Cars"


import debug from "sabio-debug";

const _logger = debug.extend("App")

const _loggerPage = _logger.extend("SPA")

class App extends Component {
  constructor(props) {
    super(props); {
      _loggerPage("Full Application/Page Refresh Detected")
      _logger("App Constructor with location", props.location)
      let user = null;

      this.state = {user};
      this.state.otherValueSetInAppConstructor = 1;
    }
  }

componentDidMount(){
  console.log("Component did mount")

}

  render() {
    return (
        <React.Fragment>
          <div>
            <Header {...this.props}>
            </Header>
          </div>
          <div>
            <Route path="/" exact={true} component={LandingPage}></Route>
            <Route path="/People" exact={true} component={People}></Route>
            <Route path="/Blogs" exact={true} component={Blogs}></Route>
            <Route path="/TechCo" exact={true} component={TechCo}></Route>
            <Route path="/Jobs" exact={true} component={Jobs}></Route>
            <Route path="/Events" exact={true} component={Events}></Route>
            <Route path="/PostWidget" exact={true} component={PostWidget}></Route>
            <Route path="/LandingPage" exact={true} component={LandingPage}></Route>
            <Route path="/WelcomePage" exact={true} component={WelcomePage}></Route>
            <Route path="/Friends" exact={true} component={Friends}></Route>
            <Route path="/Cars" exact={true} component={Cars}></Route>
            


            <Route path="/RegisterForm" exact={true} component={RegisterForm}></Route>
            <Route path="/UserLogin" exact={true} component={UserLogin}></Route>
          </div>
          <main role="main">
            <div className="container">
              {/* <div className="row m-3">Empty</div> */}
              {/* <LandingPage></LandingPage> */}
              
              
            </div>
          </main>
          <div> 
            <Footer></Footer>
          </div>
        </React.Fragment>
    );
  }
}

export default withRouter(App);
