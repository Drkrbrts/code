import React from "react";

class Marker extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
      ></div>
    );
  }
}

export default Marker;
