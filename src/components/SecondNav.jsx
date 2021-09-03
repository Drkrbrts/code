import React from 'react'

function SecondNav() {
  return (
    <div class="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/friends">Friends</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jobs">Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tech-companies"
                >Tech Companies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">Events</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SecondNav