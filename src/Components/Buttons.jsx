import React from "react";

class Buttons extends React.Component {
  onGoToRegistration = (e) => {
    console.log("clicked!");
    this.props.history.push("/Register");
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onGoToRegistration}
          >
            Go to Registration
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
