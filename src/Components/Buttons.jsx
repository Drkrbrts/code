import React from "react";

class Buttons extends React.Component {
  onCarsClicked = (e) => {
    console.log("Show Cars was clicked");
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 ">
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={this.onCarsClicked}
          >
            Show Cars
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
