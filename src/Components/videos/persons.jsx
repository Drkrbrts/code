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

    //set state frist way  when we pass an object as an argument
    let newUser = { ...this.state.currentUser }; //we are use spread to copy references
    newUser.firstName = "Fernando"; //now we are changing the copies fistname property that way to not change our state
    let newState = { currentUser: newUser }; //now we will pass a copy were our objects name is currentUSer
    //same as our object but in this case the objects firstName property has changed.

    this.setState(newState); // now we are just changing the reference via set state so one flavor of doing this
    //remember setstate kicks off the lifecycles and render as well.

    //you can however just pass the object itself: like this
    this.setState({ currentUser: newUser });
    //to add new arguments you can simply do this:
    //this version is easy to remember
    this.setState({ currentUser: newUser, apples: "I love apples" });

    //set state not the vanilla way: this is the one they wants us to use: more to talk this way then the otber way
    //the call to setstate can be synchronous or asynchrnous.
    //it can be asynchronous so plan for that behavior
    //the toehr version takes a function and per the documentation it's called an updater
    //it will be passed state and props you cant control this. the most recent
    //there might be a series of updaters firing
    //use this when we are basing state based on whats on state use the parameter prevState

    var updater = (prevState, props) => {
      var newUser = { ...prevState.currentUser };
      newUser.firstName = "Micahel";

      return { currentUser: newUser }; //because he didn't name the operator currentUser he has to do a key value object
      //however if newUSer was called currentUser then return statemetn could've been {currentUSer};
      //you can do it like this if the logic gets complex however more often you will see it like this
    };

    this.setState(updater);

    //the anonymous function whitin setState version3:
    //more

    this.setState((prevState, props) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.firstName = "Micahel";
      const newFriends = [...currentUser.friends, { name: "goofy" }];
      currentUser.friends = newFriends;

      return { currentUser };
    });
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
