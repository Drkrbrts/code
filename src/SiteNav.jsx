import React from "react";
import {products } from "./userService";

class LoginHandler extends React.Component{

onClickHandler = () => {
    const data = {};

    products(data)
    .then(this.onActionSuccess)
    .catch(this.onActionError);

}

onActionSuccess = (response) => {

console.log("it work")

}

onActionError= (errResponse) => {
 // do something
}
}
export default LoginHandler;