import React from "react";

class JobsSearch extends React.Component {
  state = {
    search: "",
    pageIndex: 0,
    pageSize: 0,
  };
  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let input = currentTarget.name;
    console.log(input);

    this.setState((prevstate) => {
      let newState = {};

      newState[input] = newValue;
      console.log(newState);
      return newState;
    });
  };
  render() {
    return (
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          style={{
            width: "15%",
            height: "40px",
            position: "absolute",
            right: "140px",
            top: "105px",
            borderRadius: "10px",
          }}
          name="search"
          onChange={this.onFormFieldChange}
          //   value={this.state.search}
        />

        <button
          className="btn btn-primary"
          type="button"
          style={{
            height: "40px",
            width: "100px",
            position: "absolute",
            right: "30px",
            top: "105px",
            borderRadius: "10px",
          }}
          //   onClick={this.onSearchClicked}
        >
          Search
        </button>
      </div>
    );
  }
}

export default JobsSearch;
