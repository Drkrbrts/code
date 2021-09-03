import React, { Component } from "react";
import * as peopleService from "../services/peopleService";

class ClassComponent extends Component {
  onClickHandler = () => {
    const data = {
      email: "rodeell21@gmail.com",
      password: "String1",
      tenantId: "U01TT4WTJTH",
    };

    userService
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log(response);
  };

  onActionError = (errResponse) => {
    console.warn(errResponse);
  };

  render() {
    return userService.logIn();
  }
}

export default ClassComponent;
