import React from "react";

class Persons extends React.Component {
  state = {
    currentUser: {
      firstName: "Cesar",
      lastName: "Ortiz",
      friends: [{ name: "Joseph" }, { name: "David" }],
      age: 26,
    },
  };

  componentDidMount() {
    console.log("COmponent DId mount");
    console.log(this.state);

    //set state
    let newUser = { ...this.state.currentUser };
    newUser.firstName = "Fernando";
    let newState = { currentUser: newUser };

    this.setState(newState);
  }

  componentDidUpdate(prevState) {
    console.log("inside update");
    console.log(prevState.currentUser);
  }

  sayHello = (msg) => {
    return msg;
  };

  render() {
    return (
      <>
        <div>{this.sayHello("From PErsons componenet!")}</div>
        <div>{this.state.currentUser.firstName}</div>
      </>
    );
  }
}

export default Persons;
