import React from "react";

function SearchText(props) {
  const onFormFieldChange = (e) => {
    let target = e.currentTarget;
    props.onChangeRequested(target);
  };

  // const onSearchClicked = (e) => {
  //   console.log("onSearchClicked firing");
  //   e.preventDefault();
  //   props.onSearch();
  // };
  return (
    <form className="form-inline">
      <div className="row">
        <div className="col">
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="search"
              value={props.search}
              onChange={onFormFieldChange}
            />
          </div>
        </div>
        {/* <div className="col">
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={onSearchClicked}
          >
            Search
          </button>
        </div> */}
      </div>
    </form>
  );
}
export default SearchText;
