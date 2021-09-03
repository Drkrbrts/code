import React from "react";


class LoginButton extends React.Component {
    clickHandler = () => {
        this.props.history.push("/login");
    }


    render() {
        return <React.Fragment>
                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Login
                  </button>
                </li>   

        </React.Fragment>
    }
}




export default LoginButton;