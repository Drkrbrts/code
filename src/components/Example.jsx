import React from "react";

class Example extends React.Component {
  state = {
    stateObject: {
      stringProperty: "string",
      numberProperty: 0,
      arrayProperty: [],
    },
  };

  normalSetState = () => {
    let someObject = "data";

    this.setState({ someObject });
  };

  updaterSetState = () => {
    let data = "data";

    this.setState((prevState) => {
      return { ...prevState, data };
    });
  };

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ numberProperty: 10 });
        }}
      />
    );
  }
}
export default Example;
