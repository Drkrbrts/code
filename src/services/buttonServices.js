import React from "react";
//import register from "./registerService"
import postEntity from "./EntityService"
//import Login from "./UserService"

function Button(props) {
    console.log(props);
    //var data = props
    //register(props.submitdata);
    postEntity(props.submitdata);
    //Login();
  return <button onClick={props.click} submitdata={props.submitData} type="submit" class="btn btn-primary">Register</button>;
}

export default Button;