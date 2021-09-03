import React from "react";
import login from "./UserService"

function Button(props) {
    console.log(props);
    //var data = props
    //register(props.submitdata);
    login(props.submitdata);
  return <button onClick={props.click} submitdata={props.submitData} type="submit" class="btn btn-primary">Login</button>;
}

export default Button;