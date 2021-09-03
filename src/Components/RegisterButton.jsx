import React from "react";


class RegisterButton extends React.Component {
    clickHandler = () => {
        this.props.history.push("/register");
    }


    render() {
        return <React.Fragment>
                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Register
                  </button>
                </li>   

        </React.Fragment>
    }
}




export default RegisterButton;