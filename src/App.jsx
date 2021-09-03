import React, { Component } from "react";
import Header from "./registerComp/navComp";
// import Register from "./registerComp/SignUp";
import Widgets from "./components/codechallenge"
import { ToastContainer } from "react-toastify";







import "./App.css";
import 'rc-pagination/assets/index.css';


class App extends Component {
  
  
  
  render() {
    return <React.Fragment>
       <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        <div>
          <div>
          <Header></Header>
          </div>
        </div>
        <div>
          <div>
          <Widgets></Widgets>
          </div>
        </div>
        
     
      </React.Fragment>
  }
}

export default App;
