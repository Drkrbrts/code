import React from "react";

function SearchDates(props) {
  const onFieldChange = (e) => {
    // console.log("onFieldChange firing", e.currentTarget.value);
    e.preventDefault();
    let target = e.currentTarget;
    props.onChangeRequested(target);
  };
  const searchClicked = (e) => {
    console.log("searchClicked", e);
    e.preventDefault();
    props.onSearchRequested();
  };
  return (
    <>
      <div className="container p-4 mb-3 border rounded shadow bg-light">
        <div className="row">
          <div className="col">
            <h4>Search {props.searchTopic}</h4>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col d-flex-inline">
            <input
              type="text"
              className="form-control"
              name="dateStart"
              placeholder="Start Date"
              value={props.search.dateStart}
              onChange={onFieldChange}
            />
          </div>
          <div className="col d-flex-inline">
            <input
              type="text"
              className="form-control"
              name="dateEnd"
              placeholder="End Date"
              value={props.search.dateEnd}
              onChange={onFieldChange}
            />
          </div>
          <div className="col d-flex-inline">
            <div className="align-self-end">
              <button
                type="button"
                name="search"
                className="btn btn-primary"
                onClick={searchClicked}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchDates;
