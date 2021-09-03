import React from "react";
import "./App.css";
import 'rc-pagination/assets/index.css';
import SignUp from "./startertask/SignUp";
import Header from "./navComp";
import Login from "./startertask/logincomp"
import Home from "./startertask/homepage"
import {Route} from "react-router-dom"
import {withRouter} from "react-router-dom";
// import Friends from "./startertask/addfriends";
import Blogs from "./startertask/blogs";
import Tech from "./startertask/companies";
import Jobs from "./startertask/jobs";
import Events from "./startertask/events"
import AllFriends from "./startertask/friendshome"
// import Frist from "./startertask/starterpage"
import Cars from "./codechallenge/car"
// import Car from "./codechallenge/showcars"


class App extends React.Component {
 
  
  
  render() {
    return <React.Fragment>
       <div>
         <div>
           <Header {...this.props} ></Header>
           <Cars ></Cars>
         </div>
       </div>
       <div>
         <div>
           {/* <AllFriends ></AllFriends> */}
         </div>
       </div>
       
<div>
<Route path="/login" exact = {true} component={Login}></Route>
<Route path="/signUp" exact = {true} component={SignUp}></Route>
<Route path="/home" exact = {true} component={Home}></Route>
<Route path="/friends" exact = {true} component={AllFriends}></Route>
<Route path="/blogs" exact = {true} component={Blogs}></Route>
<Route path="/tech" exact = {true} component={Tech}></Route>
<Route path="/jobs" exact = {true} component={Jobs}></Route>
<Route path="/events" exact = {true} component={Events}></Route>
<Route path="/cars" exact = {true} component={Cars}></Route>
{/* <Route path="/car" exact = {true} component={Car}></Route> */}
</div>
<div>


</div>




     
      </React.Fragment>
  }
}

export default withRouter(App);
