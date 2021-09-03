import React from "react";

class Example extends React.Component {
  state = {
    stateObject: {
      stringProperty: "string",
      numberProperty: 0,
      arrayProperty: [],
    },
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
