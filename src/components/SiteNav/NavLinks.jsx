import React from 'react'

function NavLinks(props) {
  return (
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li>
        <button
          href="#"
          className="nav-link px-2 text-secondary link-button"
        >
          Home
        </button>
      </li>
      <li>
        <button className="nav-link px-2 text-white link-button">
          Features
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
        >
          Pricing
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
        >
          FAQs
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
        >
          About
        </button>
      </li>
    </ul>
  )
}

export default NavLinks