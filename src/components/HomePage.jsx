import React from "react";
import * as userService from "../services/userService";




class HomePage extends React.Component {

    state = { user: {} }
       
    componentDidMount(){
        console.log("component did mount for homepage")

        userService.currentUser()
        .then(this.onActionSuccess)
        .catch(this.onActionError)
        console.log("current user is logged in")

        userService.currentLoggedIn()
        .then(this.onActionSuccess)
        .catch(this.onActionError)
        console.log("got user Id")
    }


    onActionSuccess = (response) => {
        this.setState({user: response.data.item})
       
        // this.setState(() => {
        //     return {user: response.data.item};
        // });
        console.log("success number 1")
    }
    onActionError = (errResponse) => {
        console.log("error")
    }
    

    onLogOutBtnClick = (event) => {
        event.preventDefault();
        userService.logOut()
            .then(this.onLogoutActionSuccess)
            .catch(this.onLogoutActionError)
        console.log("logout button is working")
    }
    onLogoutActionSuccess = (response) => {
        console.log("success number 2")
    }
    onLogoutActionError = (errResponse) => {
        console.log("error")
    }
    


    onGoToLogInPageClick = (event) => {
        // event.preventDefault();
        console.log("go to login button was clicked");
        this.props.history.push("/loginpage/");
    };
    
    

    render() {
        return (

            <React.Fragment>

                
                <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         
            
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                        <button href="#" 
                            className="nav-link px-2 text-white link-button">Home</button>
                        </li>
                        <li>
                        <button href="#"
                            className="nav-link px-2 text-white link-button">People</button>
                        </li>
                        <li>
                        <button href="#" 
                            className="nav-link px-2 text-white link-button">Blogs</button>
                        </li>
                        <li>
                        <button href="#" 
                            className="nav-link px-2 text-white link-button">Tech Co.</button>
                        </li>
                        <li>
                        <button href="#" 
                            className="nav-link px-2 text-white link-button">Jobs</button>
                        </li>
                        <li>
                        <button href="#" 
                            className="nav-link px-2 text-white link-button">Events</button>
                        </li>
                    </ul>

                    <div className="text-end">
                        {/* <button type="button" onClick={this.onGoToLogInPageClick} className="btn btn-danger me-2">Login</button> */}
                        <a role="button" className="btn btn-danger me-2"onClick={this.onGoToLogInPageClick} href="/loginpage">Login</a>
                        <button type="button" className="btn btn-danger">Register</button>
                    </div>
                    <div>
                        <a role="button" className="btn btn-danger me-2"onClick={this.onLogOutBtnClick} href="/loginpage">Log Out</a></div>
                    </div>
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img
                        src="https://pw.sabio.la/images/Sabio.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Sabio"
                        />
                    </a>
                </div>


                </header>

                <div>
                <h1>Welcome {this.state.user.name}</h1>

                </div>
             
            </React.Fragment>

        );
    }
}



export default HomePage;