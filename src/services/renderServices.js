import React from "react";
import Button from "./Button.js";


class LoginButton extends React.Component {
    state = {
        Button: "Unclicked"
      };
      changeName = () => {
        this.setState({
          Button: "Clicked"
        });
      };

    render() {
        //console.log("This Button clicked")
        return (
        <React.Fragment> <Button className="btn btn-primary btn-lg">
        Login Button
        
      </Button> </React.Fragment>);
    }

}

export default LoginButton;
