import React from "react";
import * as userService from "../services/userService";

class Logout extends React.Component {
    clickHandler = () => {
        userService.logOut().then(response => {
            console.log(response, "onLogoutSuccess");
            this.props.history.push("/login");
        }) 
    }


    render() {
        return <React.Fragment>
                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Logout
                  </button>
                </li>   

        </React.Fragment>
    }
}




export default Logout;