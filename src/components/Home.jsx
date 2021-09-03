import React, { Component } from "react"; 
import * as userService from "../services/userService";
import HomeNavBar from "../components/HomeNavBar";
import { toast } from "react-toastify";



class Home extends Component {

    state = {
        firstName: "",
        lastName: "", 
      };

    
    componentDidMount() {

        userService.getCurrentUser(this.state)
        .then(this.onGetCurrentUserSuccess)
        .catch(this.onGetCurrentUserError);
      
    }

       
    onGetCurrentUserSuccess = (response) => {
        console.log("onGetCurrentUserSuccess", "You are logged in", response);

        this.setState({ firstName: response.data.item.name })

    }

    onGetCurrentUserError = (errResponse) => {
        console.log(errResponse);
        toast.error("Please login to proceed");

        this.props.history.push("/login")
    }



    onLogOutClicked = (e) => {
        e.preventDefault(); 
        console.log("onLogOutClicked", "button is firing ok");

        userService.logOut(this.state)
        .then(this.onLogOutSuccess)
        .catch(this.onLogOutError);
    }



    onLogOutSuccess = (response) => {
        console.log("onLogOutSuccess", response);
        toast.error("You are now logged out");

        this.props.history.push("/login");

    }

    onLogOutError = (err) => {
        console.error(err);
    }

  

    render () {

        return(

            <React.Fragment>

                <HomeNavBar></HomeNavBar>
              <main role="main">
                <div className="container">
                  <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                      <p className="col-md-8 fs-4">
                        Welcome Home {this.state.firstName}
                      </p>
                      <p>
                        <button className="btn btn-primary btn-md" onClick={this.onLogOutClicked.bind(this)}>
                          Log Out
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </React.Fragment>


        ); 
    }
}

export default Home; 