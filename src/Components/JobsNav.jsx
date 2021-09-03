import React from "react";
import { NavLink } from "react-router-dom";

function jobsNav() {
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container margin-left: none">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="container">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-10 justify-content-left mb-md-0">
                <li>
                  <NavLink
                    to="/addJobs"
                    exact={true}
                    {...this}
                    className="nav link px-2 text white btn btn-danger"
                  >
                    + Job
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
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

export default jobsNav;
