import React from "react";
import { NavLink } from "react-router-dom";

class TechCoNav extends React.Component {
  render() {
    return (
      <>
        <header className="bg-dark text-white">
          <div className="container margin-left: none">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="container">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-10 justify-content-left mb-md-0">
                  <li>
                    <NavLink
                      to="/techco/new"
                      exact={true}
                      {...this}
                      className="nav link px-2 text white btn btn-danger"
                    >
                      + TechCo
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Friends"
                    aria-label="Search"
                    name="searchBar"
                    // onChange={this.onFormFieldChanged}
                  ></input>
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    // onClick={this.onSubmitHandle}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default TechCoNav;
