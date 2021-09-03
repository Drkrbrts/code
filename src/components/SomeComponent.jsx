import React from "react"
import * as userService from "../services/userService";

class SomeComponent extends React.Component {
// and within your compoent you can now do something like

onClickLogInHandler = () => {
    const data = {
        "email": "user@google.com"
        ,"password": "password"
        ,"tenantId": "UO228K6HGDD"
    };

    //... code omitted.

    userService.logIn(data)
    .then(this.onActionSuccess)
    .catch(this.onActionError);

}

onActionSuccess = (response) => {
 // do something
}

onActionError= (errResponse) => {
 // do something
}

render() {

    return;
}

};

export default SomeComponent;