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

  //Because this.props and this.state may be updated asynchronously, you should not rely on values for
  //calculating the next state. for example:  this code may fail to update the counter

  //wrong an example it doesnt have props so it wont wokr
  //this.setState({counter: this.state.counter + this.props.increment});

  //try using the second form instead
  // second form:

  //   this.setState((state, props)=>({
  //       counter: state.counter + props.increment
  //   }))

  //works with a regular function as well
  //  this.setState(function(props, state){
  //      return {
  //          counter: state.counter + props.incrment
  //      }

  //  });

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
