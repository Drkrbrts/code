import React from "react";

function EventsSearch(props) {
  const onFieldChange = (e) => {
    console.log("onFieldChange firing", e.currentTarget.value);
    e.preventDefault();
  };
  const searchClicked = (e) => {
    console.log("searchClicked", e);
    e.preventDefault();
  };
  return (
    <>
      <div className="container p-4 mb-3 border rounded shadow bg-light">
        <div className="row">
          <div className="col">
            <h4>Search Events</h4>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col d-flex-inline">
            <input
              type="text"
              className="form-control"
              name="dateStart"
              placeholder="Start Date"
              // value={props.formData.dateStart}
              onChange={onFieldChange}
            />
          </div>
          <div className="col d-flex-inline">
            <input
              type="text"
              className="form-control"
              name="dateEnd"
              placeholder="End Date"
              // value={props.formData.dateEnd}
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
export default EventsSearch;
