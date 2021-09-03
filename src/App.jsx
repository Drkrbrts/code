import React from "react";
import SiteNav from "./components/SiteNav";
// import Jumbo from './components/Jumbo'
// import Content from './components/Content'
import Footer from './components/Footer'
// Add Redirect
import { Route, withRouter} from "react-router-dom";
import "./App.css";
import 'rc-pagination/assets/index.css'
import AboutPage from "./components/pages/AboutPage";
import FAQPage from "./components/pages/FAQPage"
import PricingPage from "./components/pages/PricingPage"
import FeaturesPage from "./components/pages/FeaturesPage"
import HomePage from "./components/pages/HomePage"
import IndexPage from "./components/pages/IndexPage"
import TechCosPage from "./components/pages/TechCosPage"
import FriendsPage from "./components/pages/FriendsPage"
import JobsPage from "./components/pages/JobsPage"
import RegisterPage from "./components/pages/RegisterPage"
import LoginPage from "./components/pages/LoginPage"
import EventsPage from "./components/pages/EventsPage"
import Widget from './components/codechallenge/Widget'
// import IsLoggedIn from "./components/helpers/IsLoggedIn";
import AddEditFriend from './components/friends/AddEditFriend'
import Cars from "./components/codechallenge/Cars";

// import Pagination from 'rc-pagination';
// ReactDOM.render(<Pagination />, container);

class App extends React.Component {

  state = {
    userData: {
      email: ""
    },
    isLoggedIn: false
  }

  componentDidMount() {
    // <IsLoggedIn {...this.props}></IsLoggedIn>
  }

  render() {
    return (
        <React.Fragment>
          <header className="p-3 bg-dark text-white">
            <SiteNav {...this.props}></SiteNav>
            
          </header>

          <main role="main">


            <Route path="/" exact={true} component={IndexPage}></Route>
            <Route path="/home" exact={true} component={HomePage}></Route>
            <Route path="/login" exact={true} component={LoginPage}></Route>  
            <Route path="/register" exact={true} component={RegisterPage}></Route>
            <Route path="/features" exact={true} component={FeaturesPage}></Route>
            <Route path="/pricing" exact={true} component={PricingPage}></Route>
            <Route path="/faqs" exact={true} component={FAQPage}></Route>
            <Route path="/about" exact={true} component={AboutPage}></Route>

            <Route path="/events" exact={true} component={EventsPage}></Route>
            <Route path="/jobs" exact={true} component={JobsPage}></Route>
            <Route path="/friends" exact={true} component={FriendsPage}></Route>
            <Route path="/friends/add-edit" exact={true} component={AddEditFriend}></Route>
            <Route path="/tech-companies" exact={true} component={TechCosPage}></Route>
            
            {/* Challenges */}
            <Route path="/widget" exact={true} component={Widget}></Route>
            <Route path="/cars" exact={true} component={Cars}></Route>
            
            
            {/* <Jumbo></Jumbo> */}
            {/* <Content></Content> */}
          </main>
          <Footer></Footer>
        </React.Fragment>
    );
  }
}

export default withRouter(App);
