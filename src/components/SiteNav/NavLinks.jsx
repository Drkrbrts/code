import React from 'react'
import { Link } from "react-router-dom";

function NavLinks(props) {

  function homeClicked() {
    console.log("Home Button Clicked")
  }

  function featuresClicked() {
    console.log("Features Button Clicked")
  }

  function pricingClicked() {
    console.log("Pricing Button Clicked")
  }

  function faqClicked() {
    console.log("FAQ Button Clicked")
  }

  function aboutClicked() {
    console.log("About Button Clicked")
  }


  return (
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/">
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button" onClick={homeClicked}
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/features">
                <button className="nav-link px-2 text-white link-button" onClick={featuresClicked}>
                  Features
                </button>
              </Link>
            </li>
            <li>
            <Link to="/pricing">
              <button
                href="#"
                className="nav-link px-2 text-white link-button" onClick={pricingClicked}
              >
              Pricing
              </button>
            </Link>
            </li>
            <li>
              <Link to="/faqs">
              <button
                href="#"
                className="nav-link px-2 text-white link-button" onClick={faqClicked}
              >
                FAQs
              </button>
              </Link>
            </li>
            <li>
              <button
                href="#"
                className="nav-link px-2 text-white link-button" onClick={aboutClicked}
              >
                <Link to="/about">About</Link>
              </button>
            </li>
          </ul>
  )
}

export default NavLinks